import {
  FiClock,
  FiMail,
  FiMapPin
} from "react-icons/fi";

import { contactDetails } from "@/data/contact";

export function ContactDetails() {
  return (
    <section
      className="footer-contact-details"
      aria-label="Contact details"
    >
      <a
        className="footer-contact-item"
        href={`mailto:${contactDetails.email}`}
      >
        <span
          className="footer-contact-icon"
          aria-hidden="true"
        >
          <FiMail />
        </span>

        <span>
          <strong>Email</strong>
          <small>{contactDetails.email}</small>
        </span>
      </a>

      <div className="footer-contact-item">
        <span
          className="footer-contact-icon"
          aria-hidden="true"
        >
          <FiMapPin />
        </span>

        <span>
          <strong>Location</strong>
          <small>{contactDetails.location}</small>
        </span>
      </div>

      <div className="footer-contact-item">
        <span
          className="footer-contact-icon"
          aria-hidden="true"
        >
          <FiClock />
        </span>

        <span>
          <strong>Availability</strong>
          <small>{contactDetails.availability}</small>
        </span>
      </div>
    </section>
  );
}