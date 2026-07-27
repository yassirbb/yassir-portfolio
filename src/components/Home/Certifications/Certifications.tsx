import {
  FiAward
} from "react-icons/fi";

import { certifications } from "@/data/certifications";

import { CertificationCard } from "@/ui/Cards";
import { Section } from "@/ui/Section/Section";
import { certificationIcons } from "@/icons/certification-icons";

export function Certifications() {
  return (
      <Section
        id="certifications"
        aria-labelledby="certifications-title"
        icon={FiAward}
        title="Certifications"
        titleId="certifications-title"
      > 
        <div className="certifications-grid">
          {certifications.map((certification) => (
            <CertificationCard
              key={certification.id}
              {...certification}
              icon={certificationIcons[certification.providerId]}
            />
          ))}
        </div>
    </Section>
  );
}