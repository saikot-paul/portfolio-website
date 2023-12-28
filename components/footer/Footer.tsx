import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="mx-auto px-20 py-5 border-t-2 w-full h-full border-gray-50 sticky top-0 z-50 bg-black">
      <div className="flex justify-center items-center space-x-3">
        <a href="https://github.com/saikot-paul" target="_blank">
          <BsGithub
            size={30}
            className="hover:-translate-y-2 transition-transform cursor-pointer"
          />
        </a>
        <a
          href="https://linkedin.com/in/saikot-paul-74b626171/"
          target="_blank"
        >
          <BsLinkedin
            size={30}
            className="hover:-translate-y-2 transition-transform cursor-pointer"
          />
        </a>
        <a href="mailto:saikotpaul123@gmail.com">
          <IoMdMail
            size={35}
            className="hover:-translate-y-2 transition-transform cursor-pointer"
          />
        </a>
        <a href="https://twitter.com/p_saikot" target="_blank">
          <BsTwitter
            size={35}
            className="hover:-translate-y-2 transition-transform cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
