"use client";
import "./component-styles.css";
import { useEffect, useState } from "react";
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
  onClick,
}: {
  text: string;
  href?: string;
  bg: string;
  bg_hover: string;
  textColor: string;
  textColorHover: string;
  blank?: boolean;
  className?: string;
  onClick?: (e:any) => void;
}) => {
  const router = useRouter();
  const handleClick = () => {
    if (href === undefined) return;
    else {
      blank ? window.open(href, "_blank") : router.push(href);
    }
  };
  const [colorItems, setColorItems] = useState("");

  const classFormat =
    `custom-button relative flex flex-row flex-wrap items-center justify-center  text-sm text-black drop-shadow-2xl overflow-hidden text-white  drop-shadow-2xl `.concat(
      className ? className : "gap-4 px-8 py-4 w-fit"
    );
  useEffect(() => {
    setColorItems(textColor);
  }, []);
  return (
    <button
      className={classFormat}
      onClick={onClick ? onClick : handleClick}
      style={{
        backgroundColor: bg,
        fontFamily: "Opificio-rounded-bold",
        letterSpacing: "0.1rem",
        color: colorItems,
      }}
      onMouseEnter={(e) => setColorItems(textColorHover)}
      onMouseLeave={(e) => setColorItems(textColor)}
    >
      <div
        className="absolute effect-button h-full w-full "
        style={{
          backgroundColor: bg_hover,
        }}
      />
      <p
        className="text-xs sm:text-sm"
        style={{
          color: colorItems,
        }}
      >
        {text}
      </p>
      <IconComponent
        iconName="icon_go"
        className="icon h-4 w-auto z-10 "
        style={{
          color: colorItems,
        }}
      />
    </button>
  );
};
