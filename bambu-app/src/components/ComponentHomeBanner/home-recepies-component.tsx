"use client"
import { useRouter } from "next/navigation";
import IconComponent from "@/components/IconComponent";
import "@/components/component-styles.css";  


export const HomeRecipiesButton = ({ href }: { href: string }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(href);
  };
  return (
    <div className="home-recipies-container flex flex-col items-center">
      <button
        className={`button backdrop-blur-md bg-white bg-opacity-10 text-white text-2xl font-bold rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center cursor-pointer  hover:bg-opacity-10`}
        onClick={handleClick}
      >
        <IconComponent iconName="icon_go_next" className="w-4 h-4 sm:w-5 sm:h-5 z-10 rotate-90 text-white"/>
        
      </button>
      <div
        className="description flex flex-col pt-2 justify-center items-center text-white text-xs sm:text-sm  cursor-pointer  "
        onClick={handleClick}
      >
        <p>Ver nuestras</p>
        <p>recetas</p>
      </div>


    
    </div>
  );
};
