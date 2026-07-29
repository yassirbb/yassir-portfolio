import { FiArrowUpRight } from "react-icons/fi";
import "./certification-card.css";

import type { Certification } from "@/data/certifications";
import { IconType } from "react-icons";
import type { Dictionary } from "@/i18n/dictionaries";


interface CertificationCardProps extends Certification {
  icon: IconType;
  copy: Dictionary["common"];
};

export function CertificationCard({
  formattedDate,
  providerId,
  icon: ProviderIcon,
  provider,
  issuedAt,
    title,
    description,
    credentialUrl,
    copy
}: CertificationCardProps) {

  return (
    <article className="certification-card">
      <div className="certification-card-top">
        <div
          className={[
            "certification-provider-icon",
            `certification-provider-${providerId}`
          ].join(" ")}
          aria-hidden="true"
        >
          <ProviderIcon />
        </div>

        <div className="certification-provider-info">
        <p>{provider}</p>

        {!formattedDate ? (
            <span className="certification-card-ongoing-tag">
            {copy.ongoing}
            </span>
        ) : (
            <>
            {formattedDate && (
                <time dateTime={issuedAt}>
                {formattedDate}
                </time>
            )}
            </>
        )}
        </div>
      </div>

      <div className="certification-card-content">
        <h3>{title}</h3>

        <p>{description}</p>
      </div>

      <div className="certification-card-footer">
        {credentialUrl ? (
          <a
            className="certification-card-action"
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${copy.viewCredential}: ${title} (${copy.opensInNewTab})`}
          >
            {copy.viewCredential}
            <FiArrowUpRight aria-hidden="true" />
          </a>
        ) : (
          <span className="certification-card-status">
            {copy.credentialSoon}
          </span>
        )}
      </div>
    </article>
  );
}
