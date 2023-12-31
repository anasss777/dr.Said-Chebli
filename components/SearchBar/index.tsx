import React from "react";

const searchSvg = (
  <svg
    viewBox="0 0 24 24"
    height={30}
    width={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
        stroke="#ccc"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>{" "}
    </g>
  </svg>
);

const SearchBar = () => {
  return (
    <div className={`hidden w-fit mx-auto sm:flex items-center`}>
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
  );
};

export default SearchBar;
