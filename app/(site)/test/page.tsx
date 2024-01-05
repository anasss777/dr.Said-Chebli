"use client";

import { getPosts } from "@/sanity/sanity-utils";
import { Post } from "@/types/Post";
import React, { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { blog: string };
};

const test = ({ params }: Props) => {
  const slug = params.blog;
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const postsData = await getPosts();
      setPosts(postsData);
    };

    fetchData();
  }, []);

  return (
    <div className={`rtl`}>
      {posts.map((post, index) => (
        <PortableText value={post.body} />
      ))}
    </div>
  );
};

export default test;
