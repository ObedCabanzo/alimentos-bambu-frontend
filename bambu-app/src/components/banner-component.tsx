import { HighlightText } from "./highlight-text-component";
import { LateralComponent } from "@/components/ComponentHomeBanner/lateral-component";
import { SocialMediaComponent } from "@/components/ComponentHomeBanner/social-media-component";
export const BannerComponent = ({
  children,
  className,
  lateralComponentColor,
  socialMediaColor,
  bgColor,
  title,
  descriptionItems,
  color
}: {
  className?: string;
  lateralComponentColor?: string;
  socialMediaColor?: string;
  children?: React.ReactNode;
  title?: string;
  color?: string;
  bgColor?: string;
  descriptionItems?: {
    description: string;
    coloredItems: number[];

  }[];
}) => {
  return (
    <section
      className={"relative bg-container pt-16 sm:pt-20 md:pt-24 lg:pt-28 ".concat(
        className ? className : "bg-home"
      )}
      style={{
        backgroundColor: bgColor ? bgColor : "",
      }}
    >
      <div className="flex flex-col items-center justify-center pt-16 pb-16 z-10">
        {children}
        {title && descriptionItems ? (
          <div className="flex flex-col items-center  lg:py-16 md:py-12 py-8  lg:px-96 md:px-64 sm:px-32 px-16 gap-6  ">
            <div className="flex flex-col items-center gap-5">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white text-center font-bold">
                {title}
              </h1>
              <span className="w-2/5 h-1 rounded-xl" style={{
                backgroundColor:  color ? color : "white",
              }}></span>
            </div>
            <div className="flex flex-col items-center gap-2 text-white text-center text-xs sm:text-sm md:text-base ">
              {descriptionItems.map((item, index) => (
                <HighlightText
                  key={index}
                  text={item.description}
                  color={color ? color : "white"}
                  indices={item.coloredItems}
                />
              ))}
            </div>
          </div>
        ) : null}

        <LateralComponent color={lateralComponentColor} />

        <SocialMediaComponent
          className="absolute -left-0 opacity-1 hidden sm:flex "
          color={socialMediaColor}
        />
      </div>
    </section>
  );
};
