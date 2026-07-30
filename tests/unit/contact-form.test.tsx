import {
  fireEvent,
  render,
  screen,
  waitFor
} from "@testing-library/react";
import {
  afterEach,
  describe,
  expect,
  it,
  vi
} from "vitest";

import { ContactForm } from "@/components/Contact/ContactForm/ContactForm";
import { dictionaries } from "@/i18n/dictionaries";

function fillValidForm() {
  fireEvent.change(
    screen.getByLabelText(
      dictionaries.en.contact.name
    ),
    { target: { value: "Jane Doe" } }
  );
  fireEvent.change(
    screen.getByLabelText(
      dictionaries.en.contact.email
    ),
    {
      target: {
        value: "jane@example.com"
      }
    }
  );
  fireEvent.change(
    screen.getByLabelText(
      dictionaries.en.contact.subject
    ),
    {
      target: {
        value: "Frontend opportunity"
      }
    }
  );
  fireEvent.change(
    screen.getByLabelText(
      dictionaries.en.contact.message
    ),
    {
      target: {
        value:
          "I would like to discuss a frontend opportunity."
      }
    }
  );
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("ContactForm", () => {
  it("announces validation errors and focuses the first invalid field", async () => {
    render(<ContactForm copy={dictionaries.en.contact} />);

    fireEvent.click(
      screen.getByRole("button", {
        name: dictionaries.en.contact.send
      })
    );

    const nameInput = screen.getByLabelText(
      dictionaries.en.contact.name
    );

    await waitFor(() => {
      expect(nameInput).toHaveFocus();
    });
    expect(nameInput).toHaveAttribute(
      "aria-invalid",
      "true"
    );
    expect(
      screen.getByRole("alert")
    ).toHaveTextContent(
      dictionaries.en.contact.validation.formInvalid
    );
    expect(
      screen.getByText(
        dictionaries.en.contact.validation.nameRequired
      )
    ).toBeInTheDocument();
  });

  it("uses localized French validation messages", () => {
    render(<ContactForm copy={dictionaries.fr.contact} />);

    fireEvent.click(
      screen.getByRole("button", {
        name: dictionaries.fr.contact.send
      })
    );

    expect(
      screen.getByText(
        dictionaries.fr.contact.validation.emailRequired
      )
    ).toBeInTheDocument();
  });

  it("submits to the contact endpoint and announces success", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          code: "MESSAGE_SENT"
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
    );
    vi.stubGlobal("fetch", fetchMock);

    render(
      <ContactForm
        copy={dictionaries.en.contact}
      />
    );
    fillValidForm();

    fireEvent.click(
      screen.getByRole("button", {
        name: dictionaries.en.contact.send
      })
    );

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(1);
    });
    expect(fetchMock).toHaveBeenCalledWith(
      "/api/contact",
      expect.objectContaining({
        method: "POST"
      })
    );
    expect(
      await screen.findByText(
        dictionaries.en.contact.feedback
          .sendSuccess
      )
    ).toBeInTheDocument();
  });

  it("disables submission while a request is pending", async () => {
    let resolveRequest:
      | ((response: Response) => void)
      | undefined;
    const fetchMock = vi.fn(
      () =>
        new Promise<Response>((resolve) => {
          resolveRequest = resolve;
        })
    );
    vi.stubGlobal("fetch", fetchMock);

    render(
      <ContactForm
        copy={dictionaries.en.contact}
      />
    );
    fillValidForm();

    const submitButton = screen.getByRole(
      "button",
      {
        name: dictionaries.en.contact.send
      }
    );
    fireEvent.click(submitButton);
    fireEvent.click(submitButton);

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(submitButton).toBeDisabled();
    expect(submitButton).toHaveTextContent(
      dictionaries.en.contact.sending
    );

    resolveRequest?.(
      new Response(
        JSON.stringify({
          code: "MESSAGE_SENT"
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
    );

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
    });
  });

  it("translates response codes without displaying provider errors", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          code: "RATE_LIMITED",
          error:
            "Technical Resend provider details"
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
    );
    vi.stubGlobal("fetch", fetchMock);

    render(
      <ContactForm
        copy={dictionaries.fr.contact}
      />
    );

    fireEvent.change(
      screen.getByLabelText(
        dictionaries.fr.contact.name
      ),
      { target: { value: "Jane Doe" } }
    );
    fireEvent.change(
      screen.getByLabelText(
        dictionaries.fr.contact.email
      ),
      {
        target: {
          value: "jane@example.com"
        }
      }
    );
    fireEvent.change(
      screen.getByLabelText(
        dictionaries.fr.contact.subject
      ),
      {
        target: {
          value: "Opportunité frontend"
        }
      }
    );
    fireEvent.change(
      screen.getByLabelText(
        dictionaries.fr.contact.message
      ),
      {
        target: {
          value:
            "Je souhaite discuter d'une opportunité frontend."
        }
      }
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: dictionaries.fr.contact.send
      })
    );

    expect(
      await screen.findByText(
        dictionaries.fr.contact.feedback
          .tooManyAttempts
      )
    ).toBeInTheDocument();
    expect(
      screen.queryByText(
        "Technical Resend provider details"
      )
    ).not.toBeInTheDocument();
  });
});
