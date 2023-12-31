import React from "react";
import { experienceType } from "./experienceType";

const ExperienceHelper = ({
  dates,
  company,
  position,
  description,
}: experienceType) => {
  return (
    <li key={dates} className="mb-10 ms-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-white-700"></div>
      <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
        {dates}
      </time>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        {position} - {company}
      </h3>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 text-wrap">
        {description}
      </p>
    </li>
  );
};

export default ExperienceHelper;
