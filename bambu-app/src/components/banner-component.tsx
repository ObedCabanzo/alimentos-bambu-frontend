import { LateralComponent } from "./lateral-component";
import { SocialMediaComponent } from "./social-media-component";
export const BannerComponent = ({
  children,
  className,
  lateralComponentColor,
  socialMediaColor,
}: {
  className?: string;
  lateralComponentColor?: string;
  socialMediaColor?: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      className={"relative bg-container pt-16 sm:pt-20 md:pt-24 lg:pt-28 ".concat(
        className ? className : "bg-home"
      )}
    >
      <div className="flex flex-col items-center justify-center pt-16 pb-16 z-10">
        {children}
        <LateralComponent color={lateralComponentColor} />

        <SocialMediaComponent
          className="absolute -left-0 opacity-1 hidden sm:flex "
          color={socialMediaColor}
        />
      </div>
    </section>
  );
};
