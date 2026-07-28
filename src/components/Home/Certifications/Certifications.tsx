import {
  FiAward
} from "react-icons/fi";

import { getCertifications } from "@/data/certifications";

import { CertificationCard } from "@/ui/Cards";
import { Section } from "@/ui/Section/Section";
import { certificationIcons } from "@/icons/certification-icons";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export function Certifications({
  copy,
  common,
  locale
}: {
  copy: Dictionary["home"];
  common: Dictionary["common"];
  locale: Locale;
}) {
  const certifications = getCertifications(locale);
  return (
      <Section
        id="certifications"
        aria-labelledby="certifications-title"
        icon={FiAward}
        title={copy.certificationsTitle}
        titleId="certifications-title"
      > 
        <div className="certifications-grid">
          {certifications.map((certification) => (
            <CertificationCard
              key={certification.id}
              {...certification}
              icon={certificationIcons[certification.providerId]}
              copy={common}
            />
          ))}
        </div>
    </Section>
  );
}
