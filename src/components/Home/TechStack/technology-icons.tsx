import type { IconType } from "react-icons";
import {
  SiCypress,
  SiJavascript,
  SiLeaflet,
  SiMui,
  SiReact,
  SiReactquery,
  SiTypescript
} from "react-icons/si";

import type { TechnologyId } from "@/data/technologies";

const JotaiIcon: IconType = ({
  className,
  size = 30,
  title
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role={title ? "img" : undefined}
    aria-hidden={title ? undefined : true}
  >
    {title && <title>{title}</title>}

    <circle
      cx="16"
      cy="16"
      r="12"
      stroke="currentColor"
      strokeWidth="2"
    />

    <circle
      cx="12"
      cy="13"
      r="2.5"
      fill="currentColor"
    />

    <circle
      cx="20"
      cy="13"
      r="2.5"
      fill="currentColor"
    />

    <path
      d="M11 20C13.5 22.5 18.5 22.5 21 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const VisxIcon: IconType = ({
  className,
  size = 30,
  title
}): React.ReactNode => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role={title ? "img" : undefined}
    aria-hidden={title ? undefined : true}
  >
    {title && <title>{title}</title>}

    <rect
      x="5"
      y="5"
      width="22"
      height="22"
      rx="4"
      stroke="currentColor"
      strokeWidth="2"
    />

    <path
      d="M10 22V17"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />

    <path
      d="M16 22V11"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />

    <path
      d="M22 22V14"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export const technologyIcons: Record<
  TechnologyId,
  IconType
> = {
  react: SiReact,
  typescript: SiTypescript,
  javascript: SiJavascript,
  mui: SiMui,
  cypress: SiCypress,
  jotai: JotaiIcon,
  "react-query": SiReactquery,
  visx: VisxIcon,
  leaflet: SiLeaflet
};