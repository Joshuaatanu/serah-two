/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useCallback, useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import NavbarItem from "./NavbarItem";
import Image from "next/image";
const TOP_OFFSET = 66;
function Navbar() {

  const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showBackground, setShowBackground] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
  
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

    const toggleMobileMenu = useCallback(() => {
      setShowMobileMenu((current) => !current);
    }, []);
    const toggleAccountMenu = useCallback(() => {
      setShowAccountMenu((current) => !current);
    }, []);

  return (
    // <nav className={` px-8 py-4 w-full flex flex-row text-black fixed ${showBackground ? "bg-zinc-900 bg-opacity-90" : ""} `}>
    //     <a href="/"><h2 className="text-2xl text-white">Logo</h2></a>
    //   <div className="ml-auto flex flex-row space-x-20  text-white text-[16px]">
      
    //   <div
    //       onClick={toggleMobileMenu}
    //       className="lg:hidden flex flex-row flex items-center gap-2 ml-8 cursor-pointer relative"
    //     >
    //       <p className="text-white text-sm">Browse</p>
    //       <BsChevronDown
    //         className={` text-white transition ${
    //           showMobileMenu ? "rotate-180" : "rotate-0"
    //         }`}
    //       />
    //       <MobileMenu visible={showMobileMenu} />
    //     </div>
    //   <a href="/">
    //       <h1>Home</h1>
    //     </a>
    //     <a href="/contact">
    //       <h1>Contact</h1>
    //     </a>
    //     <a href="/about">
    //       <h1>About</h1>
    //     </a>
    //     <a href="/services"><h1>Services</h1></a>
    //   </div>
     
    // </nav>

    <nav className="w-full z-40  fixed">
    <div
      className={`  px-4
  md-px-16
  py-6
  flex 
  flex-row
  items-center
  transition
  duration-500
  ${showBackground ? "bg-zinc-900 bg-opacity-90" : ""}`}
    >
      <img className="h-4 lg:h-7" src="/images/logo.png" alt="" />
      <div
        className="
      flex-row
      ml-8
      gap-7
      hidden
      lg:flex
      "
      >
        <a href="/"><NavbarItem label="Home" /></a>
        
        <a href="/contact"><NavbarItem label="Contact" /> </a>
       <a href="/about"><NavbarItem label="About" /> </a> 
        <a href="/services"> <NavbarItem label="Services" /></a>
        
      </div>
      <div
        onClick={toggleMobileMenu}
        className="lg:hidden flex flex-row flex items-center gap-2 ml-8 cursor-pointer relative"
      >
        <GiHamburgerMenu 
          className={` text-white h-fit transition ${
            showMobileMenu ? "rotate-180" : "rotate-0"
          }`}
        />
       
        <MobileMenu visible={showMobileMenu} />
      </div>
      <div className="flex flex-row ml-auto gap-7 items-center">
        
     
        <div
          onClick={toggleAccountMenu}
          className="flex flex-row items-center gap-2 cursor-pointer relative"
        >
          <div className=" n">
          <a href="/"><h2 className="text-2xl text-white">Logo</h2></a>
          </div>
         
          {/* <AccountMenu visible={showAccountMenu} /> */}
        </div>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;