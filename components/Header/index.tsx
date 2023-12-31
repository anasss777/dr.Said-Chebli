"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavbarElements from "./NavbarElements";
import SearchBar from "../SearchBar";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 w-full transition-all z-40 px-5 xl:px-14 ${
        scrolling ? "bg-primary/90" : "bg-primary"
      }`}
    >
      <div className="container mx-auto flex flex-row justify-between rtl">
        {/* Logo */}
        <div className={`w-fit`}>
          <Link href="/">
            <p
              className="h-full w-fit text-2xl font-bold font-gulzar bg-gradient-to-r from-third via-white to-third text-transparent
            bg-clip-text py-5 flex items-center"
            >
              د. سعيد الشبلي
            </p>
          </Link>
        </div>

        {/* Desktop mode: Navbar elements and search bar */}
        <div className={`w-fit hidden lg:flex rtl`}>
          <NavbarElements />
        </div>
        <div className={`w-fit hidden lg:flex rtl`}>
          <SearchBar />
        </div>

        {/* Mobile mode: Navbar elements and search bar */}
        <div className={`w-fit flex lg:hidden rtl`}>
          <SearchBar />
        </div>
        <div className={`w-fit flex lg:hidden rtl`}>
          <NavbarElements />
        </div>
      </div>
    </header>
  );
};

export default Header;
