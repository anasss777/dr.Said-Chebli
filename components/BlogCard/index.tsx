import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = () => {
  return (
    <Link
      href="/blog"
      className={`flex flex-col gap-4 justify-start items-end rounded-3xl shadow-Card bg-white w-full sm:w-[350px] md:w-[48%] lg:w-[350px]
      lg:h-96 h-fit pb-10 hover:scale-[1.02] transition-all duration-300 ease-linear`}
    >
      <Image
        src="/images/quran1.png"
        alt="Quran Image"
        height={600}
        width={600}
        className="w-full h-auto object-scale-down rounded-t-3xl"
      />
      <div className={`rtl flex-col px-4`}>
        <p
          className={`text-secondary font-bold text-xl w-fit mt-2 hover:text-secondary/70`}
        >
          عرض تجريبي لمكان عنوان المقالة
        </p>
        <p className={`text-third font-medium text-lg w-fit mt-3`}>
          عرض تجريبي لمكان بعض من محتوى المقالة. ثم يتبع{"... "}
          <span
            className={`underline hover:text-secondary/70 text-secondary transition-all duration-300 ease-linear`}
          >
            تابع القراءة
          </span>
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
