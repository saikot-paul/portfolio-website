import React from "react";
import Image from "next/image";
import { Typewriter } from "../TypeWriter";

const Briefer = () => {
  return (
    <div className="flex flex-rowspace-x-2 my-10 space-x-5 justify-center items-center">
      <div>
        <Image
          style={{ borderRadius: "50%" }}
          src="/headshot.jpg"
          height={300}
          width={300}
          alt="headshot image"
        ></Image>
      </div>
      <div style={{ width: "35%" }} className="my-10">
        <Typewriter
          className="text-3xl font-bold"
          delay={50}
          text="Hi, I&#39;m Saikot 👋"
        ></Typewriter>
        <div className="text-lg my-2">
          I am a 4th-year Computer Engineering student at TMU with a year of
          professional experience, I specialize in full stack development and
          machine learning. I am passionate about building machine learning as a
          service products.
        </div>
      </div>
    </div>
  );
};

export default Briefer;
