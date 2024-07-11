"use client";
import { useState } from "react";
import "@/components/component-styles.css";
import { MenuPage } from "./menu-page";
import { usePathname } from "next/navigation";

export const BurguerComponent = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  const pathname = usePathname();

  const getBgColor = (): string => {
    if (isActive) return "rgba(255, 255, 255, 1)";
    else {
      switch (pathname) {
        case "/pauze":
          return "rgba(159, 39, 70, 0.8)";
        default:
          return "rgba(255, 255, 255, 1)";
      }
    }
  };

  return (
    <>
      {
        <MenuPage
          className={isActive ? "menu-page--active" : "menu-page--default"}
          setActive={setIsActive}
        />
      }

      <div
        className={`burguer relative ${
          isActive ? "burguer-active" : ""
        } w-8 h-8 cursor-pointer flex flex-col justify-center z-20`}
        onClick={handleClick}
      >
        <div
          className="first w-8 h-1 bg-white"
          style={{
            backgroundColor: getBgColor(),
          }}
        ></div>
        <div className="relative w-8 h-1 flex flex-col justify-center mt-1">
          <div
            className={`absolute w-full h-full bg-white ${
              isActive ? "rotate-45" : ""
            }`}
            style={{
              backgroundColor: getBgColor(),
            }}
          />
          <div
            className={`absolute w-full h-full bg-white ${
              isActive ? "-rotate-45" : ""
            }`}
            style={{
              backgroundColor: getBgColor(),
            }}
          />
        </div>
        <div
          className="third w-8 h-1 bg-white mt-1"
          style={{
            backgroundColor: getBgColor(),
          }}
        ></div>
      </div>
    </>
  );
};
