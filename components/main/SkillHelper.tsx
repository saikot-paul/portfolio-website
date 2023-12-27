import React from "react";

interface skill {
  skill: string;
}

interface props {
  skills: skill[];
}

export const SkillHelper = ({ skills }: props) => {
  return (
    <>
      <div className="flex flex-wrap">
        {skills.map((item, idx) => {
          return (
            <p
              key={idx}
              className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-black rounded font-semibold"
            >
              {item.skill}
            </p>
          );
        })}
      </div>
    </>
  );
};
