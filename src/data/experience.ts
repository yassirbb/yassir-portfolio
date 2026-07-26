export type Experience = {
  id: string;
  period: string;
  title: string;
  company: string;
  engagement?: string;
  duration: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
};

export const experiences = [
  {
    id: "centreon",
    period: "January 2022 – Present",
    title: "Frontend Engineer",
    company: "Centreon Products",
    engagement: "Client engagement",
    duration: "4+ years",
    location:
      "Marrakech, Morocco — remote collaboration with a France-based client and team",
    responsibilities: [
      "Developed and maintained enterprise monitoring and configuration interfaces using React and TypeScript across two production modules.",
      "Migrated legacy Backbone.js interfaces to React and TypeScript while preserving business behavior and backend integrations.",
      "Built reusable components and complex forms with Material UI, Formik, Yup and an internal design system.",
      "Authored and maintained close to 500 Cypress component and end-to-end tests.",
      "Collaborated with backend, product, QA and frontend teams through tickets, pull requests and code reviews."
    ],
    technologies: [
      "React",
      "TypeScript",
      "React Query",
      "Jotai",
      "Material UI",
      "Cypress"
    ]
  },
  {
    id: "apm-terminals",
    period: "March 2021 – September 2021",
    title: "Full Stack Developer Intern",
    company: "APM Terminals",
    duration: "7 months",
    location: "Tangier, Morocco",
    responsibilities: [
      "Contributed to an internal web application using ASP.NET MVC, C#, JavaScript and SQL.",
      "Participated in REST API integration as part of an end-of-study engineering internship."
    ],
    technologies: [
      "ASP.NET MVC",
      "C#",
      "JavaScript",
      "SQL",
      "REST APIs"
    ]
  }
] satisfies Experience[];