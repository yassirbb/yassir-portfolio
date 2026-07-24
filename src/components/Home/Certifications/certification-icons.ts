import type { IconType } from "react-icons";
import {
  SiCoursera,
  SiReact
} from "react-icons/si";

import type { CertificationProviderId } from "@/data/certifications";

export const certificationIcons: Record<
  CertificationProviderId,
  IconType
> = {
  "epic-react": SiReact,
  coursera: SiCoursera
};