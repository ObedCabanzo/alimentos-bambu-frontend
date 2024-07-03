"use client";
import { useScrollTop } from "./hooks/useScrollTop";
import { usePathname } from "next/navigation";

export const NavBarBackground = () => {
  const isTop = useScrollTop();
  const pathname = usePathname();
  const getBgColor = (): { top: string; content: string } => {
    switch (pathname) {
      case "/contactanos":
        return { top: "rgba(56, 113, 193, 0.8)", content: "rgba(56, 113, 193, 0.8)" };
      case "/bital":
        return { top: "transparent", content: "rgba(159, 39, 70, 0.8)" };
      case "/pauze":
        return { top: "transparent", content: "rgba(255, 255, 255, 0.8)" };
      default:
        return { top: "transparent", content: "rgba(19, 78, 125, 0.8)" };
    }
  };
  return (
    <div
      className="absolute h-full w-full -z-10 left-0"
      style={{
        backgroundColor: isTop ? getBgColor().top : getBgColor().content,
        transition: "all 0.5s ease-in-out",
      }}
    />
  );
};
