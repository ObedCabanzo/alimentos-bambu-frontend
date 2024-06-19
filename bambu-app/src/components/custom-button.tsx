"use client";
import "./component-styles.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import IconComponent from "./IconComponent";


export const CustomButton = ({
  text,
  href,
  bg,
  bg_hover,
  blank,
  textColor,
  textColorHover,
  className,
}: {
  text: string;
  href: string;
  bg: string;
  bg_hover: string;
  textColor?: string;
  textColorHover?: string;
  blank?: boolean;
  className?: string;
}) => {
  const router = useRouter();
  const handleClick = () => {
    blank ? window.open(href, "_blank") : router.push(href);
  };
  const [isHoover, setIsHoover] = useState(false);

  const classFormat = `custom-button relative flex flex-row flex-wrap items-center justify-center gap-4 px-8 py-4 w-fit text-sm text-black drop-shadow-2xl overflow-hidden text-white  drop-shadow-2xl `.concat(className ? className : "");
  return (
    <button
      className={classFormat}
      onClick={handleClick}
      style={{
        backgroundColor: bg,
        fontFamily: "Opificio-rounded-bold",
        letterSpacing: "0.1rem",
        color: textColor ? textColor : "white",
      }}
      onMouseEnter={(e) => setIsHoover(true)}
      onMouseLeave={(e) => setIsHoover(false)}
    >
      <div
        className="absolute effect-button h-full w-full "
        style={{
          backgroundColor: bg_hover,
        }}
      />
      <p className="text-xs sm:text-sm">{text}</p>
      <IconComponent iconName="icon_go" className="icon h-4 w-auto z-10 " style={
        {
          color: isHoover ? textColorHover : textColor,
        }
      }/>
     
    </button>
  );
};
