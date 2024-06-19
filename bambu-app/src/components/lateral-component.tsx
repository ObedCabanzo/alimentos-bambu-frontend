"use client"
import IconComponent from "./IconComponent";
import { useMediaQuery } from "./hooks/useMediaQuery";
import { useScrollTop } from "@/components/hooks/useScrollTop";

import "./component-styles.css";
export const LateralComponent = ({ color }: { color?: string }) => {
  const isTop = useScrollTop();
  const isSmallScreen = useMediaQuery("(max-width: 1024px)");
  return (
    <div
      className={`${
        isTop ? "lateral-component-in" : "lateral-component-out"
      } absolute -right-52 opacity-0 flex flex-col gap-5 items-center justify-center lateral-component-container  px-1 sm:px-6 lg:px-8 bottom-3 sm:bottom-auto `}
    >
      <div>
        {isSmallScreen ? (
          <IconComponent
            iconName="icon_touch"
            className={"icon h-6 w-auto "}
            style={{
              color: color ? color : "white",
            }}
            width={0}
            height={0}
          />
        ) : (
          <IconComponent
            iconName="icon_mouse"
            className={"icon h-6 w-auto "}
            style={{
              color: color ? color : "white",
            }}
            width={0}
            height={0}
          />
        )}
      </div>
      <span
        className={" h-4 rounded-xl w-0.5 sm:w-1 self-center "}
        style={{
          backgroundColor: color ? color : "white",
        }}
      ></span>
      <p
        className={" transform rotate-180 whitespace-nowrap cursor-vertical-text text-xs md:text-sm "}
        style={{
          color: color ? color : "white",
        }}
      >
        Desplaza hacia abajo
      </p>
    </div>
  );
};
