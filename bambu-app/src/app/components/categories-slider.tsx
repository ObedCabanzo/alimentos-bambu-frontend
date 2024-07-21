"use client";
import { useState } from "react";
import { ArrowComponent } from "../../components/arrow-component";
import Icon from "@/components/IconComponent";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";

export const CategoriesSlider = ({
  categories,
  buttonColor,
}: {
  categories: [
    key: string,
    value: {
      title: string;
      icon: string;
      description: string;
    }
  ][];
  buttonColor: string;
}) => {
  const [activeSlide, setActiveSlide] = useState(1);

  let settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <ArrowComponent className="" icon={"icon_go_next"} color={buttonColor} />
    ),
    prevArrow: (
      <ArrowComponent
        className="right-0"
        iconClassName=" rotate-180 "
        icon={"icon_go_next"}
        color={buttonColor}
      />
    ),

    beforeChange: (current: number, next: number) => {
      if (next === categories.length - 1) {
        setActiveSlide(0);
        return;
      }
      setActiveSlide(next + 1);
    },
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          beforeChange: (current: number, next: number) => {
            setActiveSlide(next);
          },
        },
      },
    ],
  };

  return (
    <>
      <div className="min-h-fit relative flex gap-8 justify-center items-center w-full h-full  overflow-hidden">
        <div className="slider-container w-4/5 relative py-4">
          <div className="absolute w-2/12 sm:w-1/5 slider-bt-next-left h-full z-10 -left-1 hidden sm:block" />
          <div className="absolute w-2/12 sm:w-1/5 slider-bt-next-right h-full z-10 -right-1 hidden sm:block" />

          <Slider {...settings}>
            {categories.map(([key, category], index) => {
              return (
                <Link
                  key={index}
                  className="flex flex-col gap-2 rounded-3xl sm:px-2"
                  href={"/productos/".concat(key)}
                >
                  <div
                    key={index}
                    className="flex flex-col gap-2 items-center drop-shadow-lg sm:drop-shadow-xl rounded-3xl bg-white mx-4 my-6 sm:mx-1 py-8 px-4 "
                    style={{
                      transition: "opacity 0.4s ease-in-out",
                      opacity: activeSlide === index ? 1 : 0.5,
                    }}
                  >
                    <Icon
                      iconName={category.icon}
                      className="h-8 w-8 sm:h-8 text-black"
                    />
                    <p className="text-center font-bold text-sm md:text-base">
                      {category.title}
                    </p>
                    <p className="text-center text-xs md:text-sm">
                      {category.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};
