import { projectType } from "./projectType";

export const projectData: projectType[] = [
  {
    title: "Project Description Automation",
    techstack: "Next.js, GraphQL, Tailwind CSS",
    description:
      "Automated generating project descriptions for my website by gathering pinned posts from Github via GraphQL and using Cohere's APIs. After experimenting with different approaches, I combined the summarize API and /generate API for enhanced descriptions.",
    link: "https://github.com/saikot-paul/portfolio-website",
  },
  {
    title: "CV Generator",
    techstack: "React.js, Express.js, Node.js, HTML/CSS",
    description:
      "Built a resume generator that customizes CVs based on user input and job roles using AI. Improved prompt engineering by applying the STAR method to generate more accurate experience bullet points.",
    link: "https://github.com/saikot-paul/cv-generator",
  },
  {
    title: "Cache Controller",
    techstack: "VHDL",
    description:
      "Developed a cache controller system with VHDL, including CPU, cache, and main memory using BRAM. Focused on optimizing the hit or miss function and plan to modularize the design into separate entities.",
    link: "https://github.com/saikot-paul/COE758-Cache-Controller/",
  },
  {
    title: "Habit Tracker",
    techstack: "React.js, Express.js, Node.js, Firebase",
    description:
      "Collaborated on a web app to manage tasks and events with reminders. I handled user authentication, API development, and backend database configuration.",
    link: "https://github.com/saikot-paul/habit-tracker",
  },
];
