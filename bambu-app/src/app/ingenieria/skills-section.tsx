import IconComponent from "@/components/IconComponent";

export const SkillsSection = ({
  attributeItems,
}: {
  attributeItems: { title: string; description: string; icon: string }[];
}) => {
  const primaryColor = "#67B1EB";
  const secondaryColor = "#3871C1";
  return <div className="relative flex flex-col lg:flex-row lg:flex-wrap justify-start items-end px-8 sm:px-16  py-4">
    {attributeItems.map(({ title, description, icon }, index) => {
      const position = index % 2 == 0;
      return (
        <div
          key={index}
          className={" flex gap-4 justify-end w-full lg:w-1/2 py-2 lg:px-8 ".concat(
            position ? "lg:justify-end" : "lg:justify-start"
          )}
        >
          <IconComponent
            iconName={icon}
            className="order-2 w-8 h-auto min-w-6 "
            style={{
              color: secondaryColor,
            }}
            height={0}
            width={0}
          />
          <div
            className={`order:1 flex text-end flex-col `.concat(
              position ? "lg:order-1 lg:text-end " : "lg:order-3 lg:text-start"
            )}
          >
            <p
              className="text-sm font-bold"
              style={{
                color: secondaryColor,
              }}
            >
              {title}
            </p>
            <p
              className="text-xs font-bold"
              style={{
                color: primaryColor,
              }}
            >
              {description}
            </p>
          </div>
        </div>
      );
    })}
    <div className="absolute w-0.5 lg:w-1 h-full bg-[#3871C1] top-0 left-1/2 rounded-3xl hidden lg:block  "></div>
  </div>;
};
