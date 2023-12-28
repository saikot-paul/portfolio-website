import React from "react";
import ProjectHelper from "./ProjectHelper";
import { projectData } from "./projectData";
import { projectType } from "./projectType";

const Projects = () => {
  return (
    <section id="projects">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mt-10 mb-3">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-4/5">
          {projectData.map((element: projectType) => {
            return (
              <ProjectHelper
                key={element.title}
                title={element.title}
                description={element.description}
                techstack={element.techstack}
                link={element.link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
