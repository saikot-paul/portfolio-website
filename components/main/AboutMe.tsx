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
          <div className="flex flex-col my-2 px-4 w-full md:w-3/5 items-center">
            <h2 className="text-2xl font-bold mb-3 text-center">About me</h2>
            <p className="text-lg mb-2 break-words">
              My introduction into the industry started with a conversation with
              a calculus tutor of mine. He advised me that to build AI
              applications I should study electrical engineering. After my first
              year, I discovered that my abilities were more suited for
              hardware/software development so I pivoted to computer engineering
              while still honing my skills in machine learning and software
              engineering. Which leads me to where I am now, an individual
              motivated to deliver AI powered solutions.
            </p>
            <p className="text-lg mb-2 break-words md:text-justify">
              During my time outside of work, I enjoy learning. Right now I am
              reading through Advanced Portfolio Management A Quant’s Guide for
              Fundamental Investors - Giuseppe A. Paleologo. Coming from an
              engineering background it is somewhat of a hard read but I enjoy
              overcoming challenges. As I read through the textbook I try to use
              the concepts learned to build modules with the end goal to build a{" "}
              <em>
                <a
                  href="https://github.com/saikot-paul/portfolio-optimization"
                  target="_blank"
                >
                  <u>
                    <strong>financial analysis tool</strong>
                  </u>
                </a>
              </em>
              .
            </p>
            <p className="text-lg mb-2 break-words md:text-justify">
              Aside from that I like to stay fit whether it be through the gym,
              rock climbing or martial arts. I enjoy bouldering, the max grading
              I have climbed so far is a V3, so not that good yet. Martial arts
              has always been an integral part of my life. I started doing
              Karate when I was 4, and{" "}
              <em>
                <a
                  href="https://www.youtube.com/watch?v=jP29HpHTytM&t=88s"
                  target="_blank"
                >
                  <u>
                    <strong>competed internationally</strong>
                  </u>
                </a>
              </em>{" "}
              from the ages of 16-18. I had to take a hiatus from training since
              I got busy with school, but recently switched over into Kickboxing
              and Muay Thai. The transition has been really smooth, and I have
              got to say that there is much more freedom in strategy and
              techniques. Both sports require strategies that play to my
              strengths but also tuned to the current problem.
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
