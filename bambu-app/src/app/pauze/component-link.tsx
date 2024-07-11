"use client"
import IconComponent from "@/components/IconComponent";

export const LinkComponent = ({
  href,
  title,
  color,
  icon,
}: {
  href: string;
  title: string;
  color: string;
  icon: string;
}) => {
  const handleClick = (href: string) => {
    return window.open(href, "_blank");
  };

  return (
    <div
      className="flex gap-4 items-center cursor-pointer"
      onClick={() => window.open(href, "_blank")}
    >
      <h1
        className="text-xs sm:text-sm text-end"
        style={{
          color: color,
        }}
      >
        {" "}
        {title}{" "}
      </h1>
      <IconComponent
        iconName={icon}
        className="h-6 w-6 sm:h-8 sm:w-8"
        style={{ color: color }}
      />
    </div>
  );
};
