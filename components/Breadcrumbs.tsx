import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
};

const Breadcrumbs = ({ title }: Props) => {
  return (
    <div className="flex flex-col h-fit">
      <div className={`flex flex-row gap-1 text-gray-400 mx-auto text-lg`}>
        <Link
          href={"/"}
          className={`cursor-pointer z-10 hover:underline hover:text-primary/90`}
        >
          الصفحة الرئيسية
        </Link>
        <Image
          src="/images/next.png"
          alt="Next arrow"
          height={64}
          width={64}
          className={`h-3 w-auto object-scale-down rotate-180 mt-2`}
        />
        <Link
          href={"/blog"}
          className={`cursor-pointer z-10 hover:underline hover:text-primary/90`}
        >
          مقالاتي
        </Link>
      </div>
      <p
        className={`text-primary font-bold text-3xl md:text-4xl lg:text-5xl h-fit text-center mb-8`}
      >
        {title}
      </p>

      <div className="flex flex-row gap-2 mx-auto mb-12">
        <span className="text-transparent border-b border-b-primary/70 mb-4">
          __________
        </span>
        <Image
          src="/images/circle.png"
          alt="Circle Icon"
          height={64}
          width={64}
          className="h-3 w-auto object-scale-down mt-5"
        />
        <span className="text-transparent border-b border-b-primary/70 mb-4">
          __________
        </span>
      </div>
    </div>
  );
};

export default Breadcrumbs;
