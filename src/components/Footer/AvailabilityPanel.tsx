import { availabilityTypes } from "@/data/contact";
import type { Dictionary } from "@/i18n/dictionaries";

export function AvailabilityPanel({
  copy
}: {
  copy: Dictionary["footer"];
}) {
  return (
    <section className="footer-availability" aria-labelledby="footer-availability-title">
      <div className="footer-panel-heading">
        <h2 id="footer-availability-title">{copy.availabilityTitle}</h2>
        <span className="footer-availability-status">
          <span aria-hidden="true" />
          {copy.availability}
        </span>
      </div>
      <p className="footer-panel-description">{copy.availabilityDescription}</p>
      <ul className="footer-availability-types">
        {availabilityTypes.map((type, index) => (
          <li key={type.id}>
            <span className={`footer-status-dot footer-status-${type.tone}`} aria-hidden="true" />
            {copy.types[index]}
          </li>
        ))}
      </ul>
    </section>
  );
}
