import { useProductContext } from "@/components/context/products-context";
import IconComponent from "@/components/IconComponent";
import { useState } from "react";

export const CategorieButton = ({
  id,
  title,
  titleColor,
  icon,
  iconColor,
}: {
  id: number;
  title: string;
  titleColor: string;
  icon: string;
  iconColor: string;
}) => {
  const { state, dispatch } = useProductContext();
  const [hover, setHover] = useState(false);

  const isSelected = state.selectedCategory === id;

  const handleClick = () => {
    dispatch({ type: "SET_CATEGORY", payload: id });
    dispatch({ type: "SET_SEARCH_QUERY", payload: "" });
  };

  const handleHover = (value: boolean) => {
    setHover(value);
  };

  return (
    <div
      className="flex items-center cursor-pointer px-8 py-2 gap-4 sm:gap-8 rounded-3xl border-solid border-2 font-bold tracking-wider "
      style={{
        backgroundColor: isSelected ? "#496623" : hover ? "#B4E84E" : "white",
        borderColor: isSelected ? "#496623" : hover ? "#B4E84E" : "gray",
      }}
      onClick={handleClick}
      onMouseEnter={(e) => {
        handleHover(true);
      }}
      onMouseLeave={(e)=> {
        handleHover(false);
      }}
    >
      <IconComponent
        iconName={icon}
        className="h-6 sm:h-8 w-auto transition-colors transform "
        style={{
          color: isSelected ? "white" : hover ? "white" : iconColor,
        }}
      />
      <h1
        className="text-center text-xs sm:text-sm"
        style={{
          color: isSelected ? "white" : hover ? "white" : titleColor,
        }}
      >
        {title}
      </h1>
    </div>
  );
};
