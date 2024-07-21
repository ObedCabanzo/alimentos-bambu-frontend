import "./styles.css";
import { CustomButton } from "@/components/custom-button";
import { CategoriesSlider } from "./categories-slider";
import CategoriesData from "@/config/data_categories";

export default function CategoriesHomeSection({
  info: {
    description,
    background_color,
    title,
    title_color,
    description_color,
    buttonInfo: {
      button_bg_color,
      button_bg_hover_color,
      button_text_color,
      button_text_hover_color,
    },
  },
}: {
  info: {
    title: string;
    description: string;
    background_color: string;
    title_color: string;
    description_color: string;
    buttonInfo: {
      button_bg_color: string;
      button_bg_hover_color: string;
      button_text_color: string;
      button_text_hover_color: string;
    };
  };
}) {
  const textColor = "text-white";

  return (
    <section>
      <div className="flex flex-col lg:flex-row justify-between">
        <div
          className={`relative ${textColor} px-10 py-8 lg:px-20 flex flex-col sm:flex-row lg:flex-col  justify-between lg:justify-center items-center md:items-center lg:items-start  gap-2 w-full md:w-full lg:w-2/5 `}
          style={{
            backgroundColor: background_color,
          }}
        >
          <p className="opificio-bold categories-title text-xl sm:text-2xl text-center sm:text-start " style={{
            color: title_color,
          }}>
            {title}
          </p>
          <div className="flex flex-col gap-4 justify-center items-center sm:items-end lg:items-start ">
            <p className=" text-center sm:text-end lg:text-start" style={{
              color: description_color
            }}>
              {description}
            </p>
            <CustomButton
              text="Explorar"
              href="/productos"
              bg={button_bg_color}
              bg_hover={button_bg_hover_color}
              textColor={button_text_color}
              textColorHover={button_text_hover_color}
              blank={false}
            />
          </div>
        </div>
        <CategoriesSlider categories={Object.entries(CategoriesData)} buttonColor={background_color}/>
      </div>
    </section>
  );
}
