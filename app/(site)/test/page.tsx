"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Test = () => {
  const [inputValue, setInputValue] = useState(null);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        setInputValue(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`rtl`}>
      {!inputValue && (
        <input
          type="file"
          className="mx-auto flex border border-primary p-2 mt-52"
          onChange={handleFileChange}
        />
      )}
      {inputValue && (
        <iframe
          src={inputValue}
          width={500}
          height={500}
          className="mx-auto flex h-screen w-full"
        />
      )}
    </div>
  );
};

export default Test;
