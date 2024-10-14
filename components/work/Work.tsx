"use client";

import React, { useState } from "react";
import { mlExperience, sweExperience } from "./workExperience";
import { experienceType } from "./experienceType";
import ExperienceHelper from "./experienceHelper";

const Work = () => {
  const [selectedExperience, setSelectedExperience] = useState("ml");

  const isMLSelected = selectedExperience === "ml";

  const handleToggleExperience = (expSelector: string) => {
    setSelectedExperience(expSelector);
  };

  return (
    <section id="experience">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold my-10">
          Work Experience
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex gap-4 mb-8">
          <button
            className={`px-4 py-2 font-semibold rounded-md focus:outline-none transition-all ${
              isMLSelected ? "bg-white text-black" : "bg-gray-400 text-gray-700"
            }`}
            onClick={() => handleToggleExperience("ml")}
          >
            ML Experience
          </button>
          <button
            className={`px-4 py-2 font-semibold rounded-md focus:outline-none transition-all ${
              !isMLSelected
                ? "bg-white text-black"
                : "bg-gray-400 text-gray-700"
            }`}
            onClick={() => handleToggleExperience("swe")}
          >
            SWE Experience
          </button>
        </div>
        <div className="flex justify-center text-wrap items-start md:w-3/5 w-full">
          <ol
            className={`relative border-s border-gray-200 dark:border-white-700 w-full flex flex-col items-center transition-all opacity-100`}
          >
            {isMLSelected
              ? mlExperience.map((element: experienceType, index) => {
                  return (
                    <ExperienceHelper
                      key={index}
                      dates={element.dates}
                      location={element.location}
                      position={element.position}
                      company={element.company}
                      description={element.description}
                    />
                  );
                })
              : sweExperience.map((element: experienceType, index) => {
                  return (
                    <ExperienceHelper
                      key={index}
                      dates={element.dates}
                      location={element.location}
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
