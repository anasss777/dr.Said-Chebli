"use client";

import React, { useEffect, useState } from "react";
import BlogCard from "../BlogCard";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/types/Post";
import { getPosts } from "@/sanity/sanity-utils";

const BlogsSection = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const postsData = await getPosts();
      setPosts(postsData);
    };

    fetchData();
  }, []);

  return (
    <div className={`px-10 lg:px-32`}>
      <div className={`w-full py-20 h-fit flex flex-col`}>
        <p
          className={`text-primary text-3xl md:text-4xl lg:text-5xl font-bold mx-auto mb-20`}
        >
          مقالاتي
          <span>
            <Image
              src="/images/underline.png"
              alt="underline"
              height={200}
              width={200}
              className={`pt-2 w-28 md:w-36 lg:w-48`}
            />
          </span>
        </p>
        <div className={`flex flex-wrap justify-center gap-8 mx-auto`}>
          {posts.map((post, index) => (
            <BlogCard
              key={index}
              categories={post.categories}
              title={post.title}
              imageSrc={
                post.mainImage ? post.mainImage.asset.url : "/images/quran1.png"
              }
              pageLink={post.slug.current}
            />
          ))}
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
