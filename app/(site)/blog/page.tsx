"use client";

import BlogCard from "@/components/BlogCard";
import { getPosts } from "@/sanity/sanity-utils";
import { Post } from "@/types/Post";
import React, { useEffect, useState } from "react";

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [catergory, setCatergory] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      const postsData = await getPosts();
      setPosts(postsData);
    };

    fetchData();
  }, []);

  return (
    <div className={`py-20 px-10 lg:px-32 flex flex-wrap gap-5`}>
      {posts.map((post, index) => (
        <BlogCard
          key={index}
          categories={post.categories}
          title={post.title}
          imageSrc={
            post.mainImage ? post.mainImage.asset.url : "/images/quran3.png"
          }
          pageLink={post.slug.current}
        />
      ))}
    </div>
  );
};

export default Blog;
