export type CertificationProviderId =
  | "epic-react"
  | "coursera";

export type Certification = {
  id: string;
  title: string;
  provider: string;
  providerId: CertificationProviderId;
  issuedAt?: string;
  formattedDate?: string;
  description: string;
  skills: string[];
  credentialId?: string;
  credentialUrl?: string;
};

export const certifications = [
  {
    id: "epic-react",
    title: "Epic React",
    provider: "Epic Web Dev",
    providerId: "epic-react",
    description:
        "Advanced React training focused on component patterns, application architecture, performance, testing and maintainable frontend development.",
    skills: [
        "React",
        "Testing",
        "Performance",
        "Architecture"
    ]
  },
  {
    id: "html-css-javascript",
    title:
      "HTML, CSS, and JavaScript for Web Developers",
    provider: "Coursera",
    providerId: "coursera",
    issuedAt: "2021-01",
    formattedDate: "January 2021",
    description:
      "Frontend development fundamentals covering semantic HTML, responsive CSS and interactive web applications with JavaScript.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design"
    ],
    credentialId: "JSFBNUZ3H7HJ"
  },
  {
    id: "node-express-mongodb",
    title:
      "Server-side Development with NodeJS, Express and MongoDB",
    provider: "Coursera",
    providerId: "coursera",
    issuedAt: "2021-11",
    formattedDate: "November 2021",
    description:
      "Server-side application development using Node.js, Express and MongoDB, including REST APIs and database integration.",
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs"
    ],
    credentialId: "XNV5NXWPED46"
  }
] satisfies Certification[];