import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <header className="mx-20 my-5 border-b border-gray-50">
      <div className="flex justify-between items-center">
        <div>
          <Link href="/home" className="text-3xl font-bold align-text-bottom">
            Saikot Paul
          </Link>
        </div>
        <div className="flex space-x-4 text-lg align-bottom p-0">
          <Link href="home">Home</Link>
          <Link href="experience">Experience</Link>
          <Link href="projects">Projects</Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
