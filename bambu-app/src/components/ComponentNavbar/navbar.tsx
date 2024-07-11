import { NavLinks } from "./nav-links";
import { NavLogo } from "./nav-logo";
import { NavBarBackground } from "./navbar-bg";
import "@/components/component-styles.css";
export const NavBar = () => {
  return (
    <nav className="z-[2000] flex flex-row justify-between items-center px-4 sm:px-6 lg:px-8 py-5 text-white h-20 md:h-24 lg:h-28 mx-auto w-screen shadow-lg backdrop-blur-md fixed navbar-container ">
      <NavLogo />
      <NavLinks />
      <NavBarBackground />
    </nav>
  );
};
