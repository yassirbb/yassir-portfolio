import {
  fireEvent,
  render,
  screen,
  waitFor
} from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ContactForm } from "@/components/Contact/ContactForm/ContactForm";
import { dictionaries } from "@/i18n/dictionaries";

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
});
