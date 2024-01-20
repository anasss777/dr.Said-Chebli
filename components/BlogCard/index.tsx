import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  categories: Category[];
  title: string;
  imageSrc: string;
  pageLink: string;
  isbook?: boolean;
};

const BlogCard = ({ categories, title, imageSrc, pageLink, isbook }: Props) => {
  return (
    <Link
      href={isbook ? `${pageLink}` : `/blog/${pageLink}`}
      target={isbook ? "_blank" : "_self"}
      className={`flex flex-col gap-4 justify-start items-end rounded-3xl shadow-Card bg-white w-full sm:w-[350px] md:w-[48%] lg:w-[350px]
      pb-5 border hover:scale-[1.01] transition-all duration-300 ease-linear mx-auto`}
    >
      <div className={`w-full h-[80%]`}>
        <Image
          src={imageSrc}
          alt={title}
          height={600}
          width={600}
          className="object-cover h-full rounded-t-3xl"
        />
      </div>
      <div className={`rtl flex-col px-4`}>
        <div className={`flex flex-row gap-2`}>
          {categories.map((category, index) => (
            <p key={index} className={`text-secondary text-sm`}>
              {category.title}
            </p>
          ))}
        </div>
        <p
          className={`text-primary font-bold text-xl w-fit mt-2 hover:text-primary/70`}
        >
          {title}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
