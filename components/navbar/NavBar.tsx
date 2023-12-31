"use client";

import React from "react";

const NavBar = () => {
  const scrollToSection =
    (sectionId: string, offset: number) =>
    (e: { preventDefault: () => void }) => {
      e.preventDefault();
      const section = document.getElementById(sectionId);

      if (section) {
        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: sectionTop, behavior: "smooth" });
      }
    };

  const defaultOffset = 80;

  return (
    <header className="px-20 py-5 border-b w-full h-full border-gray-50 sticky top-0 z-50 bg-black">
      <div className="flex justify-between items-center">
        <div>
          <a
            className="text-3xl font-bold align-text-bottom"
            onClick={scrollToSection("home", defaultOffset)}
          >
            Saikot Paul
          </a>
        </div>
        <div className="flex space-x-4 text-lg">
          <a href="#home" onClick={scrollToSection("home", defaultOffset)}>
            Home
          </a>
          <a href="#about" onClick={scrollToSection("about", defaultOffset)}>
            About
          </a>
          <a
            href="#experience"
            onClick={scrollToSection("experience", defaultOffset)}
          >
            Experience
          </a>
          <a
            href="#projects"
            onClick={scrollToSection("projects", defaultOffset)}
          >
            Projects
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
