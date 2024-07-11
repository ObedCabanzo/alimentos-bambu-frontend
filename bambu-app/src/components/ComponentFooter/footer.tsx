import { FooterLogo, FoooterLinks, FooterAddress } from "./footer-components";
import "@/components/component-styles.css"

export const Footer = () => {
  return (
    <footer>
      <div className="footer z-10 flex flex-col justify-between items-center text-white py-8 ">
        <section className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8">
          <FooterLogo />
          <FoooterLinks />
          <FooterAddress />
        </section>
      </div>
      <section className="bottom-label w-full bottom-0 flex flex-col items-center md:flex-row md:justify-between  px-4  md:px-12 py-1 text-xs md:text-sm gap-1">
        <p className="text-center text-white">Copyright © 2023 Alimentos Bambú</p>
        <p className="text-center text-white">
          Todos los derechos reservados | Bogotá - Colombia
        </p>
      </section>
    </footer>
  );
};
