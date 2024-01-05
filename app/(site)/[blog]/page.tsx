"use client";

import { getPosts } from "@/sanity/sanity-utils";
import { Post } from "@/types/Post";
import React, { useEffect, useState } from "react";
import PortableText from "react-portable-text";

type Props = {
  params: { blog: string };
};

const Blog = ({ params }: Props) => {
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
    <div>
      {posts.map((post, index) => (
        <div className={`rtl mr-10`}>
          <p key={index}>
            {post.title}{" "}
            {/* <span>
            <br />
            {post.body}
          </span> */}
          </p>
          <PortableText
            content={post.body}
            serializers={{
              h1: (props: any) => (
                <h1
                  style={{
                    color: "#186f65",
                    fontSize: "40px",
                  }}
                  {...props}
                />
              ),
              h2: (props: any) => (
                <h2
                  style={{
                    color: "#8B4513",
                    fontSize: "30px",
                  }}
                  {...props}
                />
              ),
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Blog;
