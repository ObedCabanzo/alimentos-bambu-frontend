"use client";
import IconComponent from "@/components/IconComponent";
import { CustomButton } from "@/components/custom-button";
import { useState } from "react";
import "./styles.css";

export default function PauzeSection({
  info,
}: {
  info: {
    items: {
      id: number;
      description: string;
      icon: string;
    }[];
  };
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeIndex = (index: number) => {
    setActiveIndex(index);
  };

  const handleClick = (directon: "left" | "right") => {
    if (directon === "left") {
      if (activeIndex === 0) {
        setActiveIndex(info.items.length - 1);
      } else {
        setActiveIndex(activeIndex - 1);
      }
    } else {
      if (activeIndex === info.items.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex(activeIndex + 1);
      }
    }
  };
  return (
    <section className="flex flex-col justify-center items-center md:flex-row px-8 md:px-16 lg:px-24 py-8 gap-4 md:gap-8">
      <div className="flex flex-col w-full md:w-3/5 gap-8 items-center justify-center md:items-end">
        <IconComponent
          iconName="icon_pauze_1"
          className="w-3/5 h-auto md:w-3/5"
          width={0}
          height={0}
        />

        <div className="flex flex-row justify-center items-start gap-4 md:gap-12 ">
          <div
            className="py-4 lg:py-2 h-full cursor-pointer w-fit"
            onClick={() => handleClick("left")}
          >
            <IconComponent
              iconName="icon_go_next"
              className="rotate-180 w-auto h-6 text-[#A61917]"
            />
          </div>
          <div className="flex flex-col gap-4 items-center md:items-end w-full">
            <p className="text-xs text-center sm:text-sm md:text-right ">
              {info.items[activeIndex].description}
            </p>
            <CustomButton
              text="Conoce más"
              href="/pauze"
              bg="#A61917"
              textColor="white"
              textColorHover="white"
              bg_hover="#402419"
              blank={false}
            />
            <div className="flex sm:gap-2">
              {info.items.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className="p-2 sm:p-4 cursor-pointer "
                    onClick={() => changeIndex(index)}
                  >
                    <div
                      style={{
                        transition: "all 0.3s",
                      }}
                      className={`rounded-full ${
                        activeIndex === index
                          ? "pauze-primary-bg h-3 w-3 "
                          : "h-2 w-2 pauze-tertiary-bg2"
                      }`}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="py-4 lg:py-2 h-full cursor-pointer "
            onClick={() => handleClick("left")}
          >
            <IconComponent
              iconName="icon_go_next"
              className="w-auto h-6 text-[#A61917]"
            />
          </div>
        </div>
      </div>
      <div className="relative flex items-center justify-center w-full h-48  md:w-2/5 md:h-96 pauze-tertiary-bg2">
        <IconComponent
          iconName="icon_pauze_2"
          className="h-auto w-20 sm:w-1/5 md:w-2/5"
        />
        <div className="absolute left-0 bottom-0 flex justify-center items-center cursor-pointer p-4 lg:p-6 bg-[#708B2C]">
          <IconComponent
            iconName="icon_go_next"
            className="w-auto h-5 text-[#402419]"
          />
        </div>
      </div>
    </section>
  );
}
