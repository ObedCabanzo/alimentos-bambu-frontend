"use client";
import { useRouter } from "next/navigation";
import IconComponent from "@/components/IconComponent";
import "@/components/component-styles.css";

export const NavLogo = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div
      className="z-5 flex justify-center items-center hover:cursor-pointer pr-10 lg:pl-8 md:pl-4 pl-2 relative" 
      onClick={handleClick}
    >
      <div className="circle circle-2 shadow-lg -left-40 -top-56  md:-left-28 md:-top-48 lg:-left-20 lg:-top-44 animate-circle-1"></div>
      <div className="circle bg-white -left-40 -top-60  md:-left-28 md:-top-52 lg:-left-20 lg:-top-48 animate-circle-2"></div>
      <IconComponent iconName="icon_bambu" className="lg:w-28 lg:h-28 md:w-24 md:h-24 h-16 w-16 z-10 animate-logo opacity-0"/>
    </div>
  );
};
