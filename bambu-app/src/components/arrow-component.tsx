import IconComponent from "@/components/IconComponent";
export const ArrowComponent = ({
  className,
  icon,
  iconClassName,
  color,
  onClick,
}: {
  className: string;
  icon: string;
  iconClassName?: string;
  color?: string
  onClick?: () => {};
}) => {
  return (
    <div className={"absolute z-10  cursor-pointer ".concat(className)} onClick={onClick}>
      <IconComponent iconName={icon} className={"icon h-auto w-5 sm:w-6 ".concat(iconClassName || "")} style={{
        color: color ? color : "white",
      }} />

    </div>
  );
};
