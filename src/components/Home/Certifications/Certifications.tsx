import Link from "next/link";
import {
  FiArrowRight,
  FiAward
} from "react-icons/fi";

import { certifications } from "@/data/certifications";

import { CertificationCard } from "./CertificationCard";

export function Certifications() {
  return (
    <section
      className="certifications-section"
      id="certifications"
      aria-labelledby="certifications-title"
    >
      <div className="container wrapper">
        <header className="certifications-header">
          <div className="certifications-heading">
            <span
              className="certifications-heading-icon"
              aria-hidden="true"
            >
              <FiAward />
            </span>

            <div>
              <p className="certifications-eyebrow">
                Continuous learning
              </p>

              <h2 id="certifications-title">
                Certifications
              </h2>
            </div>
          </div>

          <div className="certifications-intro">
            <p>
              Selected courses and credentials that support
              my frontend engineering experience and
              continuous learning.
            </p>

            <Link
              className="certifications-view-all"
              href="/certifications"
            >
              View all certifications
              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </header>

        <div className="certifications-grid">
          {certifications.map((certification) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
            />
          ))}
        </div>
      </div>
    </section>
  );
}