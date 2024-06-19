"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./component-styles.css";
import { BurguerComponent } from "./burguer-component";
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
  return (
    <>
      <div className="z-15 navlinks-display-row flex flex-wrap justify-between items-center h-12 sm:h-16 md:flex-none lg:h-24 px-4 sm:px-6 lg:px-8 p-5 text-xs gap-4 ">
        {navLinks.map(({ href, label }) => {
          const isActive = pathname.startsWith(href);
          return (
            <div key={href} className={`link-container ${isActive ? "active" : ""}`}>
              <Link
                href={href}
                className={
                  isActive
                    ? "text text-white  "
                    : "text text-white "
                }
              >
                {label}
              </Link>
              <div className="underline"></div>
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
