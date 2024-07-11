import { useState } from "react";
export const useMenu = () => {
  const [isActive, setIsActive] = useState(false);
  return { isActive, setIsActive };
};
