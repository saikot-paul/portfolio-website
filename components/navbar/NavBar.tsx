"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const scrollToSection = (sectionId: string, offset = 90) => {
    return (e: { preventDefault: () => void }) => {
      e.preventDefault();
      const section = document.getElementById(sectionId);

      if (section) {
        offset = isNavOpen ? 150 : 100;
        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
          top: sectionTop,
          behavior: "smooth",
        });
        setIsNavOpen(false);
      }
    };
  };

  return (
    <header className="px-20 py-5 border-b w-full h-full border-gray-50 sticky top-0 z-50 bg-black">
      <div className="px-4 sm:px-20 mx-auto flex justify-between items-center py-3 md:py-5">
        <a
          onClick={scrollToSection("home")}
          className="cursor-pointer text-2xl font-bold"
        >
          Saikot Paul
        </a>
        <div className="md:hidden">
          <button
            className="p-2 text-gray-700 rounded-md focus:outline-none"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </button>
        </div>
        <nav className={`${isNavOpen ? "block" : "hidden"} md:flex`}>
          <ul className="md:flex md:space-x-6">
            <li>
              <Link href={"/"} className="text-xl">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/about"} className="text-xl">
                About
              </Link>
            </li>
            <li>
              <Link href={"/projects"} className="text-xl">
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
