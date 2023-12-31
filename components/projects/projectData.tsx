import { projectType } from "./projectType";

export const projectData: projectType[] = [
  {
    title: "Project Description Automation",
    techstack: "Next.js, GraphQL, Tailwind CSS",
    description:
      "I am trying to automate generating descriptions of projects for my own website, where I gather the pinned posts related to the user from Github using a GraphQL call to Github. Then using the data provided by the call and sending it to Cohere's /chat API to generate descriptions. This way, whenever I update my Github, I don't have to change the code for this website. Originally to implement this, I tried passing the README data to the chat API, along with a prompt but that didn't work even after prompt engineering. So now, I am thinking of using the summarize API and then using the output and feeding it to the /generate API for some additional flare to generate descriptions. ",
    link: "https://github.com/saikot-paul/portfolio-website",
  },
  {
    title: "CV Generator",
    techstack: "React.js, Express.js, Node.js, HTML/CSS",
    description:
      "I'm working on a tool to streamline the resume-building process, where users input their details and receive AI-driven customization tailored to their desired job roles. This project involves creating dynamic form groups, ensuring thorough validation, and implementing real-time rendering using react-pdf. In developing the AI feature, I initially faced challenges with prompt engineering, especially for generating experience bullet points. My first method, using a broad prompt, lacked the needed precision. To improve this, I shifted to using the STAR (Situation, Task, Action, Result) method and later to prompts with examples, which notably enhanced the success rate to around 50%.",
    link: "https://github.com/saikot-paul/cv-generator",
  },
  {
    title: "Cache Controller",
    techstack: "VHDL",
    description:
      "I developed a detailed cache controller system using VHDL for a course. This system is defined by a state diagram that includes several states such as Idle, Dispatcher, Read Hit, and Write Hit, each designed for specific cache operations. The CPU was implemented with VIO, and both the cache and main memory were built with BRAM modules, modified to fit the project board's specifications. A crucial feature of this project is the hit or miss function, a combinational circuit that continuously determines hit or miss situations. Moving forward, my plan is to modularize the code into separate entities. This project, utilizing chipscope for simulations, demonstrates my skills in complex hardware programming and intricate design.",
    link: "https://github.com/saikot-paul/COE758-Cache-Controller/",
  },
  {
    title: "Habit Tracker",
    techstack: "React.js, Express.js, Node.js, Firebase",
    description:
      "This is a webapp that my group built for a course, we aimed to boost time management and organizational skills by integrating features such as task management, event scheduling, and reminders. My significant contributions involved establishing client-side user authentication, developing APIs for the CRUD operations of reminders and events, and configuring the backend, database, and its schema.",
    link: "https://github.com/saikot-paul/habit-tracker",
  },
];
