import React from "react";
import { getStaticProps } from "./apis/getRepos";
import { summarizeReadMe } from "./apis/summarizeReadMe";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";

const Projects = async () => {
  const gitRepos = await getStaticProps();
  const summary = await summarizeReadMe(gitRepos[0]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold my-10">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      <div className="w-1/2">
        <div>
          <h2 className="text-2xl font-bold mb-2">Project Title</h2>
          <div className="mb-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
          <Link href={"bababooey"} target="_blank" className="m">
            <BsGithub
              size={30}
              className="hover:-translate-y-2 transition-transform cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
