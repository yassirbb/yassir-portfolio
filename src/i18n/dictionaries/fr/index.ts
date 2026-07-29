import { frCommon } from "./common";
import { frHome } from "./home";
import { frAbout } from "./about";
import { frProjects } from "./projects";
import { frContact } from "./contact";

export const fr = {
  ...frCommon,
  ...frHome,
  ...frAbout,
  ...frProjects,
  ...frContact,
} as const;
