import { navLinks } from "@/config/data_navbar"; // asegúrate de exportar navLinks desde el archivo nav-links
import "@/components/component-styles.css";
import { LinkComponent } from "./link-component";

export const MenuPage = ({className, setActive}: {className? : string, setActive: (value: boolean) => void;}) => {
  return (
    <div className={" absolute top-0 right-0 w-[100vw] h-[100vh] bg-black bg-opacity-90 flex flex-col justify-center items-center z-10 transition-all text-white gap-4 ".concat(className ? className : "menu-page--default")}>
      {navLinks.map(({ href, label }) => {
        return (
          <LinkComponent key={href} href={href} text={label} isMenu={true} setIsActive={setActive}/>
        );
      })}
    </div>
  );
};
