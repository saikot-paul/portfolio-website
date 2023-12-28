import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { projectType } from "./projectType";

export const ProjectHelper = async ({
  title,
  description,
  link,
  techstack,
}: projectType) => {
  return (
    <div className="my-2">
      <div className="md:flex space-x-2">
        <h2 className="text-2xl font-bold mb-2">
          <Link href={link} target="_blank">
            {title}
          </Link>
        </h2>
        <Link href={link} target="_blank">
          <BsGithub
            size={30}
            className="hover:-translate-y-2 transition-transform cursor-pointer"
          />
        </Link>
      </div>
      <h3 className="text-xl mb-3">
        Tech Stack: <span className="font-bold">{techstack}</span>
      </h3>
      <div>{description}</div>
    </div>
  );
};

export default ProjectHelper; 