import React from "react";
import BlogCard from "../BlogCard";
import Link from "next/link";

const BlogsSection = () => {
  return (
    <div className={`px-10 lg:px-32 bg-fourth`}>
      <div className={`w-full py-20 h-fit flex flex-col`}>
        <p
          className={`text-primary text-2xl lg:text-4xl font-bold mx-auto mb-10`}
        >
          مقالاتي
        </p>
        <div className={`flex flex-wrap justify-center gap-8 mx-auto`}>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <Link
          href="/blogs"
          className={`h-fit w-fit px-5 py-2 bg-primary rounded-3xl mt-10 text-white text-xl shadow-xl hover:bg-primary/80 transition-all
          hover:scale-[1.01] duration-300 ease-linear`}
        >
          رؤية المزيد
        </Link>
      </div>
    </div>
  );
};

export default BlogsSection;
