import Image from "next/image";
import Link from "next/link";
import React from "react";

const VideosSection = () => {
  return (
    <div
      className={`h-fit bg-fourth w-full py-32 px-10 lg:px-32 rtl flex flex-col`}
    >
      {/* Title */}
      <p
        className={`text-primary text-3xl md:text-4xl lg:text-5xl font-bold mx-auto mb-20`}
      >
        فيديوهاتي
        <span>
          <Image
            src="/images/underline.png"
            alt="underline"
            height={200}
            width={200}
            className={`pt-2 w-36 md:w-40 lg:w-56`}
          />
        </span>
      </p>

      <div className={`flex flex-col gap-3 md:flex-row md:gap-5`}>
        {/* right videos */}
        <iframe
          width="100%"
          height="450"
          src="https://www.youtube.com/embed/ru_i5xPZYBo?si=b5SoLvBT_oEXYQfQ"
          className={`rounded-3xl h-[225px] md:h-[450px] md:w-1/2`}
        />

        {/* left two videos */}
        <div className={`w-full md:w-1/2 h-[450px] flex flex-col gap-3`}>
          <iframe
            width="100%"
            height="225"
            src="https://www.youtube.com/embed/srrtOnv7pY8?si=POw9lTthvXjoXMQ7"
            className={`rounded-3xl`}
          />
          <iframe
            width="100%"
            height="225"
            src="https://www.youtube.com/embed/Qb9d1ZBxy5I?si=31DKgYxUNLh9OxZ0"
            className={`rounded-3xl`}
          />
        </div>
      </div>
      <div className={`w-full flex justify-end`}>
        <Link
          href="/videos"
          className={`h-fit w-fit px-5 py-2 bg-primary rounded-3xl mt-10 text-white text-xl shadow-xl hover:bg-primary/80 transition-all
          hover:scale-[1.01] duration-300 ease-linear ltr`}
        >
          رؤية المزيد
        </Link>
      </div>
    </div>
  );
};

export default VideosSection;
