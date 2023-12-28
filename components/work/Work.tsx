import React from "react";
import { workExperience } from "./workExperience";
import { experienceType } from "./experienceType";
import ExperienceHelper from "./experienceHelper";

const Work = () => {
  return (
    <section id="experience">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold my-10">
          Work Experience
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="w-2/5">
          <ol className="relative border-s border-gray-200 dark:border-white-700">
            {workExperience.map((element: experienceType) => {
              return (
                <ExperienceHelper
                  key={element.dates}
                  dates={element.dates}
                  position={element.position}
                  company={element.company}
                  description={element.description}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Work;
