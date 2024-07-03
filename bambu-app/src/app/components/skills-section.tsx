"use client";
import Image from "next/image";
import "./styles.css";
import CoffeeImage from "../../../public/images/image_coffee.png";
import IconComponent from "@/components/IconComponent";

import { CustomButton } from "@/components/custom-button";
import { useRouter } from "next/navigation";

export default function SkillsSection() {
  const router = useRouter();
  const iconClassname =
    "icon sm:h-16 w-12 h-12 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24";
  const data = {
    title: "¡CREA TUS PROPIOS PRODUCTOS!",
    description:
      "Con nuestra colaboración, podemos diseñar soluciones alimenticias que se adapten perfectamente a tus necesidades.",
    buttonDescription: "¡Trabajemos juntos!",
    skills: [
      {
        id: 0,
        title: {
          text: "Productos totalmente",
          className: "text-black",
        },
        subtitle: {
          text: "personalizados",
          className: "text-blue-400 font-bold",
        },
        icon: "icon_pen",
        self: "self-end",
      },
      {
        id: 1,
        title: {
          text: "Mejora",
          className: "text-blue-400 font-bold",
        },
        subtitle: {
          text: "tus productos",
          className: "text-black",
        },
        icon: "icon_chart",
        self: "self-start",
      },
      {
        id: 2,
        title: {
          text: "Diseñamos productos",
          className: "text-black",
        },
        subtitle: {
          text: "innovadores",
          className: "text-blue-400 font-bold ", //rgb(44, 169, 188)
        },
        icon: "icon_idea",
        self: "self-end",
      },
    ],
  };

  return (
    <section className="flex flex-col gap-16 py-16 w-full">
      <div className="relative flex justify-center items-end min-h-64 sm:min-h-72 md:min-h-80 lg:min-h-96 px-8 sm:gap-8 md:gap-16 lg:gap-32  ">
        {data.skills.map((skill) => {
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
            {data.title}
          </h1>
          <p className="text-center text-xs sm:text-sm ">{data.description}</p>
        </div>
        <CustomButton
          text={data.buttonDescription}
          href="/contactanos"
          bg="#1B75BB"
          bg_hover="#134E7D"
          blank={false}
        />
      </div>
    </section>
  );
}
