import { FiArrowUpRight } from "react-icons/fi";

import type { Certification } from "@/data/certifications";

import { certificationIcons } from "./certification-icons";

type CertificationCardProps = {
  certification: Certification;
};

export function CertificationCard({
  certification
}: CertificationCardProps) {
  const ProviderIcon =
    certificationIcons[certification.providerId];

    const isOngoing =
    !certification.formattedDate

  return (
    <article className="certification-card">
      <div className="certification-card-top">
        <div
          className={[
            "certification-provider-icon",
            `certification-provider-${certification.providerId}`
          ].join(" ")}
          aria-hidden="true"
        >
          <ProviderIcon />
        </div>

        <div className="certification-provider-info">
        <p>{certification.provider}</p>

        {isOngoing ? (
            <span className="certification-ongoing-tag">
            Ongoing
            </span>
        ) : (
            <>
            {certification.formattedDate && (
                <time dateTime={certification.issuedAt}>
                {certification.formattedDate}
                </time>
            )}
            </>
        )}
        </div>
      </div>

      <div className="certification-card-content">
        <h3>{certification.title}</h3>

        <p>{certification.description}</p>

        {/* <ul
          className="certification-skills"
          aria-label={`${certification.title} skills`}
        >
          {certification.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul> */}
      </div>

      <div className="certification-card-footer">
        {certification.credentialUrl ? (
          <a
            className="certification-action"
            href={certification.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View credential
            <FiArrowUpRight aria-hidden="true" />
          </a>
        ) : (
          <span className="certification-status">
            Credential link coming soon
          </span>
        )}
      </div>
    </article>
  );
}