import {
  availabilityTypes,
  contactDetails
} from "@/data/contact";

export function AvailabilityPanel() {
  return (
    <section
      className="footer-availability"
      aria-labelledby="footer-availability-title"
    >
      <div className="footer-panel-heading">
        <h2 id="footer-availability-title">
          Availability
        </h2>

        <span className="footer-availability-status">
          <span aria-hidden="true" />
          {contactDetails.availability}
        </span>
      </div>

      <p className="footer-panel-description">
        I&apos;m currently interested in frontend engineering
        opportunities, product-focused teams, remote
        collaboration and selected freelance projects.
      </p>

      <ul className="footer-availability-types">
        {availabilityTypes.map((type) => (
          <li key={type.id}>
            <span
              className={`footer-status-dot footer-status-${type.tone}`}
              aria-hidden="true"
            />

            {type.label}
          </li>
        ))}
      </ul>
    </section>
  );
}