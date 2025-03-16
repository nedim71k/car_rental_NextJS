"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

function NavBar() {
  const [showNavbar, setShowNavbar] = useState(true); 
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 100) {
        
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        
        setShowNavbar(false);
      } else {
        
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 bg-white shadow-md border-b-[1px] z-50 transition-transform duration-300  ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between px-5 ">
        <Image src="/logo2.avif" alt="logo" width={100} height={100} />
        <div className="hidden md:flex gap-5">
          <button
            className="hover:bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-600 px-3 cursor-pointer p-2 rounded-full hover:text-white text-xl" 
            onClick={() => {
              const element = document.getElementById("home");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Home
          </button>
          <button
            className="hover:bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-600  px-3 cursor-pointer p-2 rounded-full hover:text-white text-xl"
            onClick={() => {
              const element = document.getElementById("about");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            About Us
          </button>
        </div>
        <UserButton />
      </div>
    </div>
  );
}

export default NavBar;
