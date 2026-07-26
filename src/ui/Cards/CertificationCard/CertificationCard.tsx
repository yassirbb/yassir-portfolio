import { FiArrowUpRight } from "react-icons/fi";

import type { Certification } from "@/data/certifications";
import { IconType } from "react-icons";


interface CertificationCardProps extends Certification {
  icon: IconType;
};

export function CertificationCard({
  formattedDate,
  providerId,
  icon: ProviderIcon,
  provider,
  issuedAt,
    title,
    description,
    credentialUrl
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
            Ongoing
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
          >
            View credential
            <FiArrowUpRight aria-hidden="true" />
          </a>
        ) : (
          <span className="certification-card-status">
            Credential link coming soon
          </span>
        )}
      </div>
    </article>
  );
}