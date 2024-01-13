"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import { getPost, getPosts } from "@/sanity/sanity-utils";
import { Post } from "@/types/Post";
import { PortableText } from "@portabletext/react";
import React, { useEffect, useState } from "react";

type Props = {
  params: { post: string };
};

const Post = ({ params }: Props) => {
  const slug = params.post;
  const [currentPost, setCurrentPost] = useState<Post>();

  useEffect(() => {
    const fetchData = async () => {
      const postData = await getPost(decodeURIComponent(slug));
      setCurrentPost(postData);
    };

    fetchData();
  }, [currentPost, slug]);

  return (
    <div
      className={`flex flex-col justify-center py-20 px-10 lg:px-32 mx-auto rtl`}
    >
      <Breadcrumbs title={currentPost?.title || ""} />
      {currentPost?.body && (
        <PortableText
          value={currentPost?.body}
          components={{
            block: {
              h1: (props) => (
                <h1
                  className={`text-secondary text-2xl md:text-3xl lg:text-4xl font-bold my-2`}
                  {...props}
                />
              ),
              h2: (props) => (
                <h1
                  className={`text-primary/80 text-lg md:text-xl lg:text-2xl font-semibold my-2`}
                  {...props}
                />
              ),
              normal: (props) => (
                <p
                  className={`text-gray-700 text-base lg:text-lg my-2`}
                  {...props}
                />
              ),
              list: ({ children }) => (
                <li className={`text-gray-700 text-base lg:text-lg my-2`}>
                  {children}
                </li>
              ),
            },
          }}
        />
      )}
    </div>
  );
};

export default Post;
