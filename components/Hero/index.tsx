"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  // Hero Data
  const heroData = [
    {
      imgUrl: "/images/quran1.png",
      heading: "إسم الكتاب الأول",
      text: "تعريف مختصر بالكتاب الأول",
      bookHref: "/book1",
    },
    {
      imgUrl: "/images/quran2.png",
      heading: "إسم الكتاب الثاني",
      text: "تعريف مختصر بالكتاب الثاني",
      bookHref: "/book2",
    },
    {
      imgUrl: "/images/quran3.png",
      heading: "إسم الكتاب الثالث",
      text: "تعريف مختصر بالكتاب الثالث",
      bookHref: "/book3",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

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
      className="pt-[105px] pb-32 container px-10 lg:px-32 mx-auto bg-fourth"
    >
      {heroData.map((slide, index) => (
        <div
          key={index}
          className={`lg:max-w-[1305px] lg:px-10 pb-3 lg:pb-0 lg:h-96 ${
            index !== currentSlide ? "hidden" : ""
          } `}
        >
          <div className=" flex lg:flex-wrap flex-wrap-reverse items-center">
            {/* Hero Image */}
            <div className="w-full lg:w-5/12">
              <div
                className="wow fadeInUp relative z-10 mx-auto w-full max-w-[530px] pt-8 lg:mr-0 flex justify-center"
                data-wow-delay=".3s"
              >
                <Image
                  src={slide.imgUrl}
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
                  {slide.heading}
                </h1>
                <p className={`mt-8 text-gray-400 rtl`}>{slide.text}</p>
                <Link
                  href={slide.bookHref}
                  className={`h-fit w-fit px-5 py-2 bg-primary rounded-3xl mt-10 text-white text-xl shadow-xl hover:bg-primary/80 transition-all
                hover:scale-[1.01] duration-300 ease-linear`}
                >
                  رؤية المزيد
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Images' button */}
      <div className={`flex justify-center rtl`}>
        <div className="flex gap-10 relative top-16 z-10">
          {heroData.map((_, index) => (
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
