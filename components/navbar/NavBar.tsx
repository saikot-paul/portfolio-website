import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <header className="mx-auto px-20 py-5 border-b w-full h-full border-gray-50 sticky top-0 z-50 bg-black">
      <div className="flex justify-between items-center">
        <div>
          <Link href="/home" className="text-3xl font-bold align-text-bottom">
            Saikot Paul
          </Link>
        </div>
        <div className="flex space-x-4 text-lg">
          <Link href="home">Home</Link>
          <Link href="experience">Experience</Link>
          <Link href="projects">Projects</Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
