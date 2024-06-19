
import { BannerComponent } from "@/components/banner-component";
export const BannerSection = ({
  title,
  descriptionItems,
}: {
  title: string;
  descriptionItems: string[];
}) => {

  return (
    <BannerComponent className="bg-engineering">
      <div className="flex flex-col items-center  lg:py-16 md:py-12 py-8  lg:px-96 md:px-64 sm:px-32 px-16 gap-6  ">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white text-center">
            {title}
          </h1>
          <span className="w-2/5 h-1 rounded-xl bg-[#67B1EB]"></span>
        </div>
        <div className="flex flex-col items-center gap-2">
          {descriptionItems.map((item, index) => (
            <p
              key={index}
              className="text-xs md:text-sm lg:text-base text-white text-center"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </BannerComponent>
  );
};
