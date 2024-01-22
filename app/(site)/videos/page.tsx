"use client";

import { getVideos } from "@/sanity/sanity-utils";
import { Video } from "@/types/Video";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const components = {
  block: {
    h1: (props: any) => (
      <h1 className={`text-gray-500 text-sm md:text-base my-2`} {...props} />
    ),
  },
};

const Videos = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const videossData = await getVideos();
      setVideos(videossData);
    };

    fetchData();
  }, []);

  return (
    <div className={`mx-auto flex flex-col justify-center`}>
      <h1
        className={`flex mx-auto text-3xl md:text-4xl lg:text-5xl mt-20 text-primary font-bold`}
      >
        فيديوهاتي
      </h1>

      <div className={`py-20 px-10 lg:px-32 flex flex-col gap-20 rtl`}>
        {videos.map((video, index) => (
          <div className={`w-full flex md:flex-row flex-col`}>
            {/* The video section */}
            <iframe
              key={index}
              width="100%"
              height="300"
              src={video.videoLink}
              className={`rounded-t-3xl md:rounded-tl-none md:rounded-s-3xl w-full md:w-5/12 border shadow-md`}
            />

            {/* The text section */}
            <div
              className={`bg-fourth w-full md:w-7/12 h-fit md:h-[300px] py-5 md:py-10 rounded-b-3xl md:rounded-br-none
              md:rounded-e-3xl flex flex-col justify-between px-5 border shadow-md`}
            >
              {/* Video name */}
              <p
                className={`text-xl md:text-2xl lg:text-3xl text-secondary font-bold`}
              >
                {video.name}
              </p>

              {/* Video description */}
              <PortableText value={video?.body} components={components} />

              {/* Video button */}
              <Link href={video.videoLink} target="_blank">
                <button
                  className={`bg-primary w-fit h-fit py-2 px-3 rounded-3xl text-sm md:text-base text-white hover:bg-primary/80
                  transition-all hover:scale-[1.01] duration-300 ease-linear`}
                >
                  مشاهدة الفيديو في اليوتوب
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
