"use client";

import React, { useState } from "react";
import Menu from "./Menu";
import Link from "next/link";

const NavbarElements = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <button
        id="navbarToggler"
        onClick={toggleMenu}
        className={`absolute top-1/2 left-0 ml-2 block -translate-y-1/2 rounded-lg px-3 py-[6px] lg:hidden ${
          isMenuOpen && "ring-white focus:ring-2"
        }`}
      >
        <span
          className={`relative my-[6px] block h-[2px] w-[30px] bg-white transition-transform duration-300 ${
            isMenuOpen && "top-[7px] rotate-45"
          }`}
        ></span>
        <span
          className={`relative my-[6px] block h-[2px] w-[30px] bg-white ${
            isMenuOpen && "opacity-0"
          }`}
        ></span>
        <span
          className={`relative my-[6px] block h-[2px] w-[30px] bg-white transition-transform duration-300 ${
            isMenuOpen && "top-[-8px] -rotate-45"
          }`}
        ></span>
      </button>
      <nav
        id="navbarCollapse"
        className={`hidden lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0
        lg:shadow-none xl:px-6`}
      >
        <ul className={`blcok lg:flex py-2`}>
          <Menu text="الصفحة الرئيسية" href="/" />
          <Menu text="عني" href="/about" />
          <Menu text="مقالاتي" href="/articles" />
          <Menu text="تواصل معي" href="/contact-me" />
        </ul>
      </nav>

      {isMenuOpen && (
        <nav
          id="navbarCollapse"
          className={`lg:hidden absolute top-full left-0 ml-2`}
        >
          <div
            className={`bg-fourth text-secondary shadow-Card px-10 rounded-3xl w-full`}
          >
            <ul className={`py-2`} onClick={() => setMenuOpen(false)}>
              <Menu text="الصفحة الرئيسية" href="/" />
              <Menu text="عني" href="/about" />
              <Menu text="مقالاتي" href="/articles" />
              <Menu text="تواصل معي" href="/contact-me" />
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
};

export default NavbarElements;
