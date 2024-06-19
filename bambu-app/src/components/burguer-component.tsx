"use client";
import { useState } from "react";
import "./component-styles.css";
export const BurguerComponent = ({}: {}) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className={`burguer ${active ? "burguer-active" : ""} w-8 h-8 cursor-pointer flex flex-col justify-center z-5`} onClick={handleClick}>
      <div className="first w-8 h-1 bg-white"></div>
      <div className="relative w-8 h-1 flex flex-col justify-center mt-1">
        <div className={` absolute w-full h-full bg-white ${active ? "rotate-45": ""} } `}/>
        <div className={` absolute w-full h-full bg-white ${active ? "-rotate-45": ""} } `}/>
      </div>
      <div className="third w-8 h-1 bg-white mt-1"></div>
    </div>
  );
};
