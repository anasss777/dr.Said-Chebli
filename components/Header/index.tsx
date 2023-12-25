"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavbarElements from "./NavbarElements";
import Menu from "./Menu";
import { searchSvg } from "@/public/svgPaths";

// import NavbarElements from '../NavbarElements';
// import Account from './Account';
// import LocaleSwitcher from './LocaleSwitcher';

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
      className={`sticky top-0 w-full transition-all rtl centered ${
        scrolling ? "bg-primary/90" : "bg-primary"
      }`}
    >
      <div className="container mx-auto flex">
        {/* Logo */}
        <div className={`w-fit mx-auto`}>
          <Link href="/">
            <p
              className="h-full w-fit text-2xl font-bold font-gulzar bg-gradient-to-r from-third via-white to-third text-transparent
            bg-clip-text py-2 flex items-center"
            >
              د. سعيد الشبلي
            </p>
          </Link>
        </div>
        <div className={`relative flex items-center justify-center mx-auto`}>
          <div className={`flex w-full items-center justify-center mx-auto`}>
            <NavbarElements />
            <div
              className={`flex flex-row gap-2 items-center justify-center mx-auto`}
            >
              {/* <Account /> */}
            </div>
          </div>
        </div>
        <div className={`w-fit mx-auto flex items-center`}>
          <div
            className={`flex flex-row items-center h-fit w-fit px-2 rounded-3xl bg-white focus-within:border-2 focus-within:border-third`}
          >
            {searchSvg}
            <input
              type="text"
              className="h-fit w-fit py-2 px-1 placeholder:text-third rounded-3xl text-gray-500 outline-none bg-transparent"
              placeholder="إبحث عن مقالة"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
