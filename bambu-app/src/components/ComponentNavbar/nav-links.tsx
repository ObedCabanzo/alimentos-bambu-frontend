import { BurguerComponent } from "./burguer-component";
import { LinkComponent } from "./link-component";
import { navLinks } from "@/config/data_navbar";
import "@/components/component-styles.css";

export const NavLinks = () => {
  return (
    <>
      <div className="z-15 navlinks-display-row flex flex-wrap justify-between items-center h-12 sm:h-16 md:flex-none lg:h-24 px-4 sm:px-6 lg:px-8 p-5 text-xs gap-4 ">
        {navLinks.map((item, index) => {
          return <LinkComponent key={index} href={item.href} text={item.label} />;
        })}
      </div>
      <div className="navlinks-display-burguer ">
        <BurguerComponent />
      </div>
    </>
  );
};
