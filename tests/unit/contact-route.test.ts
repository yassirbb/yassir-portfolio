import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi
} from "vitest";

const sendEmailMock = vi.hoisted(() => vi.fn());

vi.mock("resend", () => ({
  Resend: class {
    emails = {
      send: sendEmailMock
    };
  }
}));

import * as contactRoute from "@/app/api/contact/route";

const validPayload = {
  locale: "en",
  name: "Yassir Ben Boubker",
  email: "visitor@example.com",
  subject: "Frontend opportunity",
  message:
    "I would like to discuss a frontend opportunity.",
  website: ""
};

function createRequest(body: string) {
  return new Request(
    "https://ybenboubker.dev/api/contact",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body
    }
  );
}

beforeEach(() => {
  vi.stubEnv("RESEND_API_KEY", "re_test_key");
  vi.stubEnv(
    "CONTACT_FROM_EMAIL",
    "Portfolio <contact@mail.ybenboubker.dev>"
  );
  vi.stubEnv(
    "CONTACT_TO_EMAIL",
    "owner@gmail.com"
  );
  sendEmailMock.mockResolvedValue({
    data: { id: "email-id" },
    error: null
  });
});

afterEach(() => {
  vi.unstubAllEnvs();
  sendEmailMock.mockReset();
  vi.restoreAllMocks();
});

describe("POST /api/contact", () => {
  it("exposes only the POST handler", () => {
    expect(contactRoute.POST).toBeTypeOf("function");
    expect("GET" in contactRoute).toBe(false);
  });

  it("sends a valid message without exposing private data", async () => {
    const response = await contactRoute.POST(
      createRequest(JSON.stringify(validPayload))
    );

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({
      code: "MESSAGE_SENT"
    });
    expect(sendEmailMock).toHaveBeenCalledWith(
      expect.objectContaining({
        from:
          "Portfolio <contact@mail.ybenboubker.dev>",
        to: ["owner@gmail.com"],
        replyTo: "visitor@example.com"
      }),
      expect.objectContaining({
        idempotencyKey: expect.stringMatching(
          /^portfolio-contact-[a-f0-9]{64}$/
        )
      })
    );
  });

  it("uses French labels for a French message", async () => {
    await contactRoute.POST(
      createRequest(
        JSON.stringify({
          ...validPayload,
          locale: "fr"
        })
      )
    );

    expect(sendEmailMock).toHaveBeenCalledWith(
      expect.objectContaining({
        text: expect.stringContaining(
          "Nom: Yassir Ben Boubker"
        )
      }),
      expect.any(Object)
    );
    expect(sendEmailMock).toHaveBeenCalledWith(
      expect.objectContaining({
        text: expect.not.stringContaining(
          "Name:"
        )
      }),
      expect.any(Object)
    );
  });

  it("rejects invalid JSON", async () => {
    const response = await contactRoute.POST(
      createRequest("{invalid")
    );

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({
      code: "INVALID_REQUEST"
    });
    expect(sendEmailMock).not.toHaveBeenCalled();
  });

  it("rejects a filled honeypot", async () => {
    const response = await contactRoute.POST(
      createRequest(
        JSON.stringify({
          ...validPayload,
          website: "https://spam.example"
        })
      )
    );

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({
      code: "SPAM_DETECTED"
    });
    expect(sendEmailMock).not.toHaveBeenCalled();
  });

  it("returns a generic code when configuration is missing", async () => {
    vi.stubEnv("RESEND_API_KEY", "");
    vi.spyOn(console, "error").mockImplementation(
      () => undefined
    );

    const response = await contactRoute.POST(
      createRequest(JSON.stringify(validPayload))
    );

    expect(response.status).toBe(503);
    expect(await response.json()).toEqual({
      code: "SERVICE_UNAVAILABLE"
    });
    expect(sendEmailMock).not.toHaveBeenCalled();
  });

  it("does not expose Resend errors", async () => {
    vi.spyOn(console, "error").mockImplementation(
      () => undefined
    );
    sendEmailMock.mockResolvedValue({
      data: null,
      error: {
        message: "Sensitive provider error"
      }
    });

    const response = await contactRoute.POST(
      createRequest(JSON.stringify(validPayload))
    );

    expect(response.status).toBe(502);
    expect(await response.json()).toEqual({
      code: "EMAIL_SEND_FAILED"
    });
  });
});
