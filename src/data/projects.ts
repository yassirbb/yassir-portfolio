


export type Project = {
  slug: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
    // technologies: ProjectTag[];
};

export const featuredProjects = [
  {
    slug: "centreon-map",
    title: "Centreon Map",
    description:
      "Interactive mapping application for monitoring infrastructure and visualizing host status in real time.",
    image: {
      src: "/images/projects/centreon-map.webp",
      alt: "Centreon Map monitoring interface"
    },
  },
  {
    slug: "bam-simulation",
    title: "BAM Simulation & Configuration",
    description:
      "Simulation and configuration tools for Business Activity Monitoring with dynamic forms and data visualization.",
    image: {
      src: "/images/projects/bam-simulation.webp",
      alt: "BAM simulation and monitoring dashboard"
    },
  },
  {
    slug: "react-migration",
    title: "React Migration Projects",
    description:
      "Migrating legacy applications to React with improved performance, maintainability and user experience.",
    image: {
      src: "/images/projects/react-migration.webp",
      alt: "React migration development interface"
    },
  }
] satisfies Project[];