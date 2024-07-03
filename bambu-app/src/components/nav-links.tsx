"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BurguerComponent } from "./burguer-component";
import "./component-styles.css";
import { useState } from "react";
const navLinks = [
  { href: "/nosotros", label: "Conócenos" },
  { href: "/productos", label: "Nuestros Productos" },
  { href: "/bital", label: "Nuestra Marca" },
  { href: "/ingenieria", label: "Ingeniería Bambú" },
  { href: "/contactanos", label: "Contáctanos" },
  { href: "/pauze", label: "Pauzé" },
];

export const NavLinks = () => {
  
  const pathname = usePathname();
  const getColorProperties = () => {
    switch (pathname) {
      case "/pauze":
        return {
          defaultColor: "#A61917",
          hoverColor: "#402419",
        };
      case "/bital":
        return {
          defaultColor: "#FFFFFF",
          hoverColor: "#402419",
        };
      case "/contactanos":
        return {
          defaultColor: "#FFFFFF",
          hoverColor: "#134E7D",
        }
      default:
        return {
          defaultColor: "#FFFFFF",
          hoverColor: "#6FDCE3",
        };
    }
  };

  return (
    <>
      <div className="z-15 navlinks-display-row flex flex-wrap justify-between items-center h-12 sm:h-16 md:flex-none lg:h-24 px-4 sm:px-6 lg:px-8 p-5 text-xs gap-4 ">
        {navLinks.map(({ href, label }) => {
          const properties = getColorProperties();
          const isActive = pathname === href;
          const [isHover, setIsHover] = useState(false);
          return (
            <div
              key={href}
              className="relative link-container"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <Link
                href={href}
                className={` 
                  transition-all 
                  ${isActive ? "font-bold" : ""}`}
                  style={{
                   color: isHover || isActive ? properties.hoverColor : properties.defaultColor
                  }}
              >
                {label}
                <div
                  className={"underline ".concat(
                    isActive ? " underline-active " : ""
                  )}
                  style={{
                    backgroundColor: properties.hoverColor,
                  }}
                ></div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="navlinks-display-burguer">
        <BurguerComponent />
      </div>
    </>
  );
};
