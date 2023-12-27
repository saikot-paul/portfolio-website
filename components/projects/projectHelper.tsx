import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";

const projectHelper = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Project Title</h2>
      <div className="mb-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
      <Link href={"bababooey"} target="_blank" className="m">
        <BsGithub
          size={30}
          className="hover:-translate-y-2 transition-transform cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default projectHelper;
