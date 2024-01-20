"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Book } from "@/types/Book";
import { getBooks } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

const components = {
  block: {
    h1: (props: any) => <h1 className={`mt-8 text-gray-400 rtl`} {...props} />,
  },
};

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const booksData = await getBooks();
      setBooks(booksData);
    };

    fetchData();
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % 3);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  return (
    <section
      id="home"
      className="pt-[105px] pb-32 px-10 lg:px-32 mx-auto bg-fourth"
    >
      {books.map((book, index) => (
        <div
          key={index}
          className={`lg:max-w-[1305px] lg:px-10 pb-3 lg:pb-0 lg:h-96 ${
            index !== currentSlide ? "hidden" : ""
          } `}
        >
          <div className=" flex flex-wrap items-center">
            {/* Hero Image */}
            <div className="w-full lg:w-5/12">
              <div
                className="wow fadeInUp relative z-10 mx-auto w-full max-w-[530px] max-h-96 pt-8 lg:mr-0 flex justify-center"
                data-wow-delay=".3s"
              >
                <Image
                  src={
                    book.mainImage
                      ? book.mainImage.asset.url
                      : "/images/quran3.png"
                  }
                  alt={`Hero image ${index + 1}`}
                  width={500}
                  height={500}
                  priority={true}
                  className="object-scale-down justify-center mx-auto rounded-3xl shadow-Card shadow-gray-400"
                />
              </div>
            </div>

            {/* Hero Text */}
            <div className="w-full px-4 lg:w-7/12 container mt-7">
              <div
                className="mb-12 lg:mb-0 lg:max-w-[570px] mx-auto flex flex-col rtl"
                data-wow-delay=".2s"
              >
                <h1
                  className={`text-primary font-bold rtl py-5 text-3xl md:text-5xl xl:text-6xl`}
                >
                  {book.name}
                </h1>
                <PortableText value={book?.body} components={components} />
                <Link
                  href={book.fileURL}
                  target="_blank"
                  className={`h-fit w-fit px-5 py-2 bg-primary rounded-3xl mt-10 text-white text-xl shadow-xl hover:bg-primary/80 transition-all
                hover:scale-[1.01] duration-300 ease-linear`}
                >
                  قراءة الكتاب
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Switch image button */}
      <div className={`flex justify-center rtl`}>
        <div className="flex gap-10 relative top-16 z-10">
          {Array.from({ length: 3 }, (_, index) => (
            <div
              key={index}
              className={`py-2 px-4 text-transparent rounded-full cursor-pointer ${
                index === currentSlide
                  ? "bg-gradient-to-tr from-primary via-primary/60 to-primary"
                  : "bg-gray-300"
              }`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
