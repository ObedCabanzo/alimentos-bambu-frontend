import { BannerComponent } from "@/components/banner-component";
import { CustomButton } from "@/components/custom-button";
import IconComponent from "@/components/IconComponent";
import { MapComponent } from "@/components/ComponentMap/index";
import PauzeInfo from "@/config/dataPage_pauze";
import { PauzeSocialMedia } from "@/config/data_social_media";
import { HighlightText } from "@/components/highlight-text-component";
import { LinkComponent } from "./component-link";

export const metadata = {
  title: "Pauzë",
};

export default function PauzePage() {
  return (
    <div>
      <BannerComponent
        bgColor="#FFFFFF"
        className="bg-container-color "
        lateralComponentColor="#A61917"
        socialMediaColor="#A61917"
      >
        <IconComponent
          iconName="icon_pauze_1"
          className="h-auto w-[70vw] sm:w-56 md:w-64 lg:w-96 py-8"
          width={0}
          height={0}
        />
      </BannerComponent>
      <section className="relative flex flex-col sm:flex-row items-center sm:justify-center  px-4  ">
        <div
          className=" order-2 sm:order-1 relative bottom-4 sm:bottom-auto sm:-right-4 lg:-top-16 flex h-40 w-48 lg:h-52 lg:w-64 sm:w-64 bg-[#D3DAA7] items-center justify-center shadow-2xl"
          style={{
            backgroundColor:
              PauzeInfo.section_description.icon_background_color,
          }}
        >
          <IconComponent
            iconName={PauzeInfo.section_description.icon_name}
            className="h-auto w-24"
          />
        </div>
        <div
          className="order-1 sm:order-2 sm:w-1/2 bg-[#A61917] px-4 py-8 sm:px-8 sm:py-12 lg:px-16 lg:py-16"
          style={{
            backgroundColor: PauzeInfo.section_description.background_color,
            color: PauzeInfo.section_description.text_color,
          }}
        >
          <p className="text-white text-xs sm:text-sm text-center">
            {PauzeInfo.section_description.description}
          </p>
        </div>
      </section>
      <section className="flex flex-col  bg-[#919191] sm:mt-8 px-4 py-8 sm:py-16 md:py-32 sm:px-16 md:px-32 lg:px-48 gap-8 items-center">
        <div className="flex flex-col text-center items-center text-xs sm:text-sm gap-2 text-white">
          {PauzeInfo.section_message.description_items.map(
            ({ description, bold, highlight_color, colored_items }, index) => {
              return (
                <h1 key={index} className={`text-center text-xs sm:text-sm `}>
                  <HighlightText
                    text={description}
                    bold={bold}
                    color={highlight_color}
                    indices={colored_items}
                  />
                </h1>
              );
            }
          )}
        </div>
        <CustomButton
          href="/contactanos"
          text="Contáctanos"
          textColor={PauzeInfo.section_message.button_text_color}
          textColorHover={PauzeInfo.section_message.button_text_hover_color}
          bg={PauzeInfo.section_message.button_background_color}
          bg_hover={PauzeInfo.section_message.button_background_hover_color}
          className="w-full gap-4 py-4 sm:w-[70%] lg:w-auto px-16"
        />
      </section>
      <section className="flex flex-col items-center sm:flex-row sm:justify-center px-4 py-8 gap-16 sm:px-8 sm:py-12 md:px-12 md:py-16 lg:px-32 lg:py-20 ">
        <div className="w-full lg:w-1/2 h-52 sm:h-64 md:h-72 lg:h-80 order-2 sm:order-1 ">
          <MapComponent
            coordinates={{ lat: 4.672538852098435, lng: -74.10999257363136 }}
            text={PauzeInfo.section_contact.map_text}
            href={PauzeSocialMedia.find((item) => item.id === 2 )?.href || ""}
            textColor="#A61917"
            buttonColor={PauzeInfo.section_contact.button_background_color}
            buttonColorHover={
              PauzeInfo.section_contact.button_background_hover_color
            }
            buttonTextColor={PauzeInfo.section_contact.button_text_color}
            buttonTextColorHover={PauzeInfo.section_contact.button_text_hover_color}
          />
        </div>
        <div className="w-fit order-1 sm:order-2 flex flex-col gap-4 sm:items-end items-center " style={{
          color: PauzeInfo.section_contact.text_color,
        }}>
          <h1 className="text-center font-bold text-sm sm:text-end">
            {PauzeInfo.section_contact.title}
          </h1>
          <div className="flex flex-col items-end gap-2">
            {PauzeSocialMedia.map(({ title, icon, href }) => {
              return (
                <LinkComponent
                  key={title}
                  href={href}
                  color={PauzeInfo.section_contact.text_color}
                  icon={icon}
                  title={title}                  
                />
              );
            })}
          </div>
          <CustomButton
            href="/contactanos"
            text="Contáctanos"
            bg={PauzeInfo.section_contact.button_background_color}
            bg_hover={PauzeInfo.section_contact.button_background_hover_color}
            textColor={PauzeInfo.section_contact.button_text_color}
            textColorHover={PauzeInfo.section_contact.button_text_hover_color}
          />
        </div>
      </section>
    </div>
  );
}
