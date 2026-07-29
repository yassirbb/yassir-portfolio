import { enCommon } from "./common";
import { enHome } from "./home";
import { enAbout } from "./about";
import { enProjects } from "./projects";
import { enContact } from "./contact";

export const en = {
  ...enCommon,
  ...enHome,
  ...enAbout,
  ...enProjects,
  ...enContact,
} as const;
