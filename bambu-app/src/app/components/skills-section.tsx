"use client";
import Image from "next/image";
import "./styles.css";
import CoffeeImage from "../../../public/images/image_coffee.png";
import IconComponent from "@/components/IconComponent";

import { CustomButton } from "@/components/custom-button";
import { useRouter } from "next/navigation";

export default function SkillsSection({
  info,
}: {
  info: {
    title: string;
    description: string;
    buttonInfo: {
      text: string;
      background_color: string;
      href: string;
      text_color: string;
      background_color_hover: string;
      text_color_hover: string;
    };
    skills: {
      id: number;
      title: {
        text: string;
        className: string;
      };
      subtitle: {
        text: string;
        className: string;
      };
      icon: string;
      self: string;
    }[];
  };
}) {
  const router = useRouter();
  const iconClassname =
    "icon sm:h-16 w-12 h-12 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24";

  return (
    <section className="flex flex-col gap-16 py-16 w-full">
      <div className="relative flex justify-center items-end min-h-64 sm:min-h-72 md:min-h-80 lg:min-h-96 px-8 sm:gap-8 md:gap-16 lg:gap-32  ">
        {info.skills.map((skill) => {
          return (
            <div
              key={skill.id}
              className={`flex flex-col justify-center items-center ${skill.self}`}
            >
              <IconComponent iconName={skill.icon} className={iconClassname} />
              <p
                className={`text-center ${skill.title.className} text-xs md:text-sm`}
              >
                {skill.title.text}
              </p>
              <p
                className={`text-center ${skill.subtitle.className} text-xs md:text-sm`}
              >
                {" "}
                {skill.subtitle.text}
              </p>
            </div>
          );
        })}

        <div className=" absolute top-6 sm:top-10 md:top-0 h-full w-full flex justify-center items-center md:items-end">
          <Image
            src={CoffeeImage}
            alt="Vercel Logo"
            className="  h-auto w-1/3 sm:h-3/6 md:h-3/5 sm:w-auto  "
            width={0}
            height={0}
            color="white"
          />
        </div>
      </div>
      <div className="flex gap-4 justify-center items-center flex-col px-8 sm:px-16 lg:px-64 ">
        <div>
          <h1 className="text-xl sm:2xl md:4xl font-bold text-center">
            {info.title}
          </h1>
          <p className="text-center text-xs sm:text-sm ">{info.description}</p>
        </div>
        <CustomButton
          text={info.buttonInfo.text}
          href={info.buttonInfo.href}
          bg={info.buttonInfo.background_color}
          bg_hover={info.buttonInfo.background_color_hover}
          textColor={info.buttonInfo.text_color}
          textColorHover={info.buttonInfo.text_color_hover}
          blank={false}
        />
      </div>
    </section>
  );
}
