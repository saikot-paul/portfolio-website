import React from "react";
import { SkillHelper } from "./SkillHelper";
import { languages, frameworks, mlds, tools } from "./skillData";

interface skill {
  skill: string;
}

const AboutMe = () => {
  return (
    <section id="about">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold my-6">
          Who is Saikot?
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col justify-center items-center md:w-full">
          <div className="flex flex-col my-2 px-4 w-full items-center">
            <h2 className="text-2xl font-bold mb-3 text-center">About me</h2>
            <p className="text-lg mb-2 text-wrap md:text-justify">
              My journey into the world of programming began with a spark of
              curiosity, through a conversation with a calculus tutor of mine.
              He spoke about his work, where he was writing a program to
              calculate the derivative of the positional information. In order,
              to get the speed of a car, for autonomous driving applications.
              It&#39;s this kind of innovation and problem-solving that drives
              me, I was sold from that moment.
            </p>
            <p className="text-lg mb-2 text-wrap md:text-justify">
              Outside of the tech world, I&#39;m passionate about rock climbing
              and kickboxing. Rock climbing is like solving puzzles on the wall,
              customizing solutions to myself, while kickboxing taps into my
              past experiences in karate and the strategy of adapting to
              opponents. Both hobbies offer mental and physical growth, pushing
              my limits and adding an exciting element of risk.
            </p>
          </div>
          <div className="flex flex-col justify-center my-2 px-4 md:w-1/3 w-full">
            <h2 className="text-2xl font-bold mb-3 text-center">My Skills</h2>
            <div className="mb-2">
              <div className="text-lg text-center">Languages</div>
              <SkillHelper skills={languages}></SkillHelper>
            </div>
            <div className="mb-2">
              <div className="text-lg text-center">Frameworks</div>
              <SkillHelper skills={frameworks}></SkillHelper>
            </div>
            <div className="mb-2">
              <div className="text-lg text-center">
                Machine Learning/Data Science
              </div>
              <SkillHelper skills={mlds}></SkillHelper>
            </div>
            <div className="mb-2">
              <div className="text-lg text-center">Tools</div>
              <SkillHelper skills={tools}></SkillHelper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
