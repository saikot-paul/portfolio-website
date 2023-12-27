import React from "react";
import { SkillHelper } from "./SkillHelper";

interface skill {
  skill: string;
}

const languages: skill[] = [
  { skill: "Python" },
  { skill: "Java" },
  { skill: "SQL" },
  { skill: "JavaScript/TypeScript" },
  { skill: "HTML/CSS" },
  { skill: "Bash/Shell" },
];
const frameworks: skill[] = [
  { skill: "React.js" },
  { skill: "Express.js" },
  { skill: "Node.js" },
  { skill: "Next.js" },
];
const mlds: skill[] = [
  { skill: "TensorFlow" },
  { skill: "Keras" },
  { skill: "ScikitLearn" },
  { skill: "Numpy" },
  { skill: "Matplotlib" },
];
const tools: skill[] = [{ skill: "Git" }, { skill: "VS Code" }];

const AboutMe = () => {
  return (
    <section id="home">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold my-6">
          Who is Saikot?
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex justify-center">
          <div className="flex flex-col my-2 px-4 w-1/2">
            <h2 className="text-2xl font-bold mb-3">About me</h2>
            <p className="text-lg mb-2">
              My journey into the world of tech began with a spark of curiosity,
              through a conversation with a calculus of mine. He spoke about his
              work with a startup, specifically using positional information to
              calculate speed of a car. I was sold from that moment, it&#39;s
              this kind of innovation and problem-solving that drives me.
            </p>
            <p className="text-lg mb-2">
              Outside of tech, I occupy myself with hobbies like rock climbing
              and kickboxing, which I really enjoy. They&#39;re not just about
              staying active they push my limits and come with a thrilling dose
              of risk.
            </p>
          </div>
          <div className="flex flex-col my-2 px-4">
            <h2 className="text-2xl font-bold mb-3">My Skills</h2>
            <div className="mb-2">
              <div className="text-lg">Languages</div>
              <SkillHelper skills={languages}></SkillHelper>
            </div>
            <div className="mb-2">
              <div className="text-lg">Frameworks</div>
              <SkillHelper skills={frameworks}></SkillHelper>
            </div>
            <div className="mb-2">
              <div className="text-lg">Machine Learning/Data Science</div>
              <SkillHelper skills={mlds}></SkillHelper>
            </div>
            <div className="mb-2">
              <div className="text-lg">Tools</div>
              <SkillHelper skills={tools}></SkillHelper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
