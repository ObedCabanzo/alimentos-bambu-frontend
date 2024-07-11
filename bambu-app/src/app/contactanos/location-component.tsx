"use client"
import { useMediaQuery } from "@/components/hooks/useMediaQuery";
import IconComponent from "@/components/IconComponent";
import Link from "next/link";

export const LocationComponent = ({href}: {href:string}) => {
  const isSmallScreen = useMediaQuery("(max-width: 1024px)");
  return (
    <div
      className={"items-center gap-2 text-white text-xs sm:text-sm  ".concat(
        isSmallScreen ? "flex" : "hidden"
      )}
    >
      <h1>Visitanos</h1>
      <div className="h-[0.15rem] w-4 bg-white rounded-3xl " />
      <Link href={href} target="_blank">
      <IconComponent
        iconName="icon_location"
        className="text-white h-4 w-4 sm:h-6 sm:w-6 cursor-pointer"
        href=""
      />
      </Link>
    </div>
  );
};
