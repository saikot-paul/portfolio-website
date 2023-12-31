import React from "react";
import Image from "next/image";
import { Typewriter } from "./TypeWriter";

const Briefer = () => {
  return (
    <section id="home">
      <div className="flex flex-col md:flex-row my-10 space-x-5 justify-center items-center">
        <div>
          <Image
            style={{ borderRadius: "50%" }}
            src="/headshot.jpg"
            height={300}
            width={300}
            alt="headshot image"
          ></Image>
        </div>
        <div className="my-10 md:w-1/3 w-3.5/10">
          <Typewriter
            className="text-3xl font-bold md:text-start text-center"
            delay={50}
            text="Hi, I&#39;m Saikot 👋"
          ></Typewriter>
          <div className="text-lg my-2 text-wrap md:text-left">
            I am a 4th-year Computer Engineering student at TMU with a year of
            professional experience, I specialize in full stack development and
            machine learning.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Briefer;
