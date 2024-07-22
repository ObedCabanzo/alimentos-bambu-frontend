"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const LinkComponent = ({
  href,
  text,
  isMenu = false,
  setIsActive
}: {
  href: string;
  text: string;
  isMenu?: boolean;
  setIsActive?: (value: boolean) => void;
}) => {
  const pathname = usePathname();
  const [isHover, setIsHover] = useState(false);
  const isActive = pathname.split("/")[1].startsWith(href.split("/")[1]);
  const properties = getColorLink(pathname, isMenu );

  return (
    <div
      key={href}
      className="relative link-container"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => setIsActive ? setIsActive(false) : null}
    >
      <Link
        href={href}
        className={` 
        transition-all 
        ${isActive ? "font-bold" : ""}
        `}
        style={{
          color:
            isHover || isActive
              ? properties.hoverColor
              : properties.defaultColor,
        }}
      >
        {text}
        <div
          className={"underline ".concat(isActive ? " underline-active " : "")}
          style={{
            backgroundColor: properties.hoverColor,
          }}
        ></div>
      </Link>
    </div>
  );
};


const getColorLink = (pathname : string, isMenu: boolean) => {
  if (isMenu) {
    return {
      
    defaultColor: "#FFFFFF",
    hoverColor: "#6FDCE3",
    }
  } 
  else {
    switch (pathname) {
      case "/pauze":
        return {
          defaultColor: "#A61917",
          hoverColor: "#402419",
          activeLink: true,
        };
      case "/bital":
        return {
          defaultColor: "#FFFFFF",
          hoverColor: "#402419",
          activeLink: true,
        };
      case "/contactanos":
        return {
          defaultColor: "#FFFFFF",
          hoverColor: "#134E7D",
        };
      default:
        return {
          defaultColor: "#FFFFFF",
          hoverColor: "#6FDCE3",
        };
    }
  }

};