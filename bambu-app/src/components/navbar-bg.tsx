"use client"
import { useScrollTop } from "./hooks/useScrollTop";

export const NavBarBackground = () => {
  const isTop = useScrollTop();
  return (
    <div
      className="absolute h-full w-full -z-10 left-0"
      style={{
        backgroundColor: isTop ? "transparent" : "rgba(19, 78, 125, 0.8)",
        transition: "all 0.5s ease-in-out",
      }}
    />
  );
};
