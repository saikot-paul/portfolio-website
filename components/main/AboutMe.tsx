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
          <div className="flex flex-col my-2 px-4 md:w-3/5 items-center">
            <h2 className="text-2xl font-bold mb-3 text-center">About me</h2>
            <p className="text-lg mb-2 text-wrap md:text-justify">
              My journey into the world of programming began with a spark of
              curiousity, through a conversation with a calculus tutor of mine.
              He spoke about his work, where he was writing a program to
              calculate the derivative of the positional information. In order,
              to get the speed of a car, for autonomous driving applications.
              It&#39;s this kind of innovation and problem-solving that drives
              me, I was sold from that moment.
            </p>
            <p className="text-lg mb-2 text-wrap md:text-justify">
              Outside of the tech world, I love doing all things physical.
              I&#39;ve always been drawn to activities that challenge both the
              body and mind. Martial arts, particularly Muay Thai, and rock
              climbing (strictly a boulder bro) are where I find this balance.
              In Muay Thai, the strategic aspect is crucial; it&#39;s about
              tailoring your approach to leverage your strengths against an
              opponent&#39;s weaknesses. Similarly, rock climbing demands
              innovative problem-solving, as each route presents unique
              obstacles that require tailored solutions based on your abilities.
              Both hobbies offer a dynamic blend of physical engagement and
              mental strategy.
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
