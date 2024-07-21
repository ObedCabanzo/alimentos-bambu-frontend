"use client";
import IconComponent from "@/components/IconComponent";
import { useState } from "react";
import { CategoriesList } from "./categoriesList-section";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const CategoriesSection = () => {
  const [hideCategories, setHideCategories] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setHideCategories(true);
  }, [pathname])

  return (
    <div className="w-screen sticky top-20 md:top-24 bg-white lg:bg-transparent flex flex-col sm:flex-row lg:w-fit justify-between items-center  lg:flex-col lg:items-start px-4 sm:px-8 py-8 sm:py-8 lg:py-16  gap-8 lg:gap-4 z-10" >
      <div className="flex w-full sm:w-fit justify-between items-center">
        <div>
          <h1 className="text-xl text-[#496623] font-bold "> CATEGORIAS </h1>
          <span className="w-2/3 h-1 bg-[#B4E84E] rounded-3xl block mt-2" />
        </div>

        <IconComponent
          iconName="icon_go_next"
          className="h-6 w-auto text-[#496623] cursor-pointer transition-all sm:hidden  "
          onClick={() => {
            setHideCategories(!hideCategories);
          }}
          style={{
            transform: hideCategories ? "rotate(90deg)" : "rotate(270deg)",
          }}
        />
      </div>

      <div
        className={
          "hidden w-11/12 sm:flex lg:flex-col lg:flex-nowrap flex-wrap gap-2 justify-center sm:justify-end lg:gap-4 transform transition-all "
        }
        style={{
          display: hideCategories ? "" : "flex",
        }}
      >
        <CategoriesList />
      </div>
    </div>
  );
};
