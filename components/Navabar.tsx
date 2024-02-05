"use client"
import React, { useEffect, useState } from "react";
const TOP_OFFSET = 66;
function Navbar() {

   
    const [showBackground, setShowBackground] = useState(false);
  
    useEffect(() => {
      const handScroll = () => {
        if (window.scrollY >= TOP_OFFSET) {
          setShowBackground(true);
        } else {
          setShowBackground(false);
        }
      };
  
      window.addEventListener("scroll", handScroll);
  
      return () => {
        window.removeEventListener("scroll", handScroll);
      };
    }, []);
  return (
    <nav className={` px-8 py-4 w-full flex flex-row text-black fixed ${showBackground ? "bg-zinc-900 bg-opacity-90" : ""} `}>
        <h2 className="text-2xl">Logo</h2>
      <div className="ml-auto flex flex-row space-x-20  text-[16px]">
      <a href="/">
          <h1>Home</h1>
        </a>
        <a href="/contact">
          <h1>Contact</h1>
        </a>
        <a href="/project">
          <h1>Projects</h1>
        </a>
        <h1>Services</h1>
      </div>
    </nav>
  );
}

export default Navbar;