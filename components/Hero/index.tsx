"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

function Hero() {
  // Hero Data
  const heroData = [
    {
      imgUrl: "/images/quran.png",
      heading: "إسم الكتاب الأول",
      text: "تعريف مختصر بالكتاب الأول",
    },
    {
      imgUrl: "/images/quran.png",
      heading: "إسم الكتاب الثاني",
      text: "تعريف مختصر بالكتاب الثاني",
    },
    {
      imgUrl: "/images/quran.png",
      heading: "إسم الكتاب الثالث",
      text: "تعريف مختصر بالكتاب الثالث",
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
      className="pt-[105px] container mb-40 px-10 lg:px-32 mx-auto"
    >
      {heroData.map((slide, index) => (
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
                className="wow fadeInUp mb-12 lg:mb-0 lg:max-w-[570px] mx-auto"
                data-wow-delay=".2s"
              >
                <h1
                  className={`text-primary font-bold rtl py-5 text-3xl md:text-5xl xl:text-6xl`}
                >
                  {slide.heading}
                </h1>
                <p className={`mt-8 text-gray-400 rtl`}>{slide.text}</p>
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
                  ? "bg-gradient-to-tr from-secondary via-secondary/60 to-secondary"
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
