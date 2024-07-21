import IconComponent from "@/components/IconComponent";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const CategorieButton = ({
  id,
  title,
  titleColor,
  icon,
  iconColor,
}: {
  id: string;
  title: string;
  titleColor: string;
  icon: string;
  iconColor: string;
}) => {
  const [hover, setHover] = useState(false);
  const pathname = usePathname();
  const isSelected = () => pathname.trim().toLowerCase().endsWith(title.trim().toLowerCase());


  const handleHover = (value: boolean) => {
    setHover(value);
  };

  return (
    <Link
      className="flex items-center cursor-pointer px-8 py-2 gap-4 sm:gap-8 rounded-3xl border-solid border-2 font-bold tracking-wider bg-white hover:bg-[#B4E84E] border-gray-200 "
      style={{
        backgroundColor: isSelected() ? "#496623" : hover ? "#B4E84E" : "white",
        borderColor: isSelected() ? "#496623" : hover ? "#B4E84E" : "gray",
      }}
      href={`/productos/${id.trim().toLowerCase()}#search`}
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
          color: isSelected() ? "white" : hover ? "white" : iconColor,
        }}
      />
      <h1
        className="text-center text-xs sm:text-sm"
        style={{
          color: isSelected() ? "white" : hover ? "white" : titleColor,
        }}
      >
        {title}
      </h1>
    </Link>
  );
};
