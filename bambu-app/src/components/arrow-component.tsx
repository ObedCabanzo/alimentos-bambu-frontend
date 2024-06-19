import IconComponent from "@/components/IconComponent";
export const ArrowComponent = ({
  className,
  icon,
  iconClassName,
  onClick,
}: {
  className: string;
  icon: string;
  iconClassName?: string;
  onClick?: () => {};
}) => {
  return (
    <div className={"absolute z-10  cursor-pointer ".concat(className)} onClick={onClick}>
      <IconComponent iconName={icon} className={"icon h-auto w-5 sm:w-6 text-[#8CC63E] ".concat(iconClassName || "")} />

    </div>
  );
};
