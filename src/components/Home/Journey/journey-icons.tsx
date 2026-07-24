import type { IconType } from "react-icons";
import {
  FiBriefcase,
  FiCode,
  FiBookOpen
} from "react-icons/fi";

import type { JourneyIconId } from "@/data/journey";

export const journeyIcons: Record<
  JourneyIconId,
  IconType
> = {
  education: FiBookOpen,
  internship: FiCode,
  career: FiBriefcase
};