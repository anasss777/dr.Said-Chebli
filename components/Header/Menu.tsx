"use client";

import Link from "next/link";
import React from "react";

type Props = {
  text: string;
  href: string;
};

const Menu = ({ href, text }: Props) => {
  return (
    <Link
      href={href}
      className={`ud-menu-scroll flex py-2 font-medium lg:font-bold text-base hover:text-primary lg:inline-flex lg:py-6
        lg:text-white lg:hover:text-white lg:hover:opacity-70 lg:mx-5 xl:mx-10`}
    >
      <li className={`relative`}>{text}</li>
    </Link>
  );
};

export default Menu;
