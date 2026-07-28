import {
  FiAward
} from "react-icons/fi";

import { certifications } from "@/data/certifications";

import { CertificationCard } from "@/ui/Cards";
import { Section } from "@/ui/Section/Section";
import { certificationIcons } from "@/icons/certification-icons";
import type { Dictionary } from "@/i18n/dictionaries";

export function Certifications({
  copy,
  common
}: {
  copy: Dictionary["home"];
  common: Dictionary["common"];
}) {
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
