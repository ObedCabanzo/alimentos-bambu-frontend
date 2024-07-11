import { CustomButton } from "@/components/custom-button";
import IconComponent from "@/components/IconComponent";
import { MapComponent } from "@/components/ComponentMap/index";
import Link from "next/link";

export const ContactSection = ({
  contact,
}: {
  contact: {
    title: string;
    items: { title: string; icon: string; iconColor: string; link: string }[];
  };
}) => {
  const primaryColor = "#67B1EB";
  const secondaryColor = "#3871C1";
  return (
    <div className="flex w-full flex-row flex-wrap-reverse justify-end items-center px-16 lg:px-0  pt-8 gap-8 z-5">
      <div className="w-full lg:w-2/5 h-64">
        <MapComponent
          coordinates={{
            lat: 4.639167381714924,
            lng: -74.16314867379322,
          }}
          text="Si deseas visitar nuestra sede central, presiona el siguiente botón"
          href="https://www.google.com/maps/place/Alimentos+Bamb%C3%BA/@4.6389749,-74.1658094,17z/data=!4m16!1m9!3m8!1s0x8e3f9c31d92766ff:0x9372def3dde031e6!2sAlimentos+Bamb%C3%BA!8m2!3d4.6389749!4d-74.1632345!9m1!1b1!16s%2Fg%2F11f__h5cxg!3m5!1s0x8e3f9c31d92766ff:0x9372def3dde031e6!8m2!3d4.6389749!4d-74.1632345!16s%2Fg%2F11f__h5cxg?entry=ttu"
          textColor="#3871C1"
          buttonColor="#67B1EB"
          buttonColorHover="#134E7D"
          buttonTextColor="white"
          buttonTextColorHover="white"
        />
      </div>

      <div className="flex flex-col w-full lg:w-2/5 gap-4 items-center lg:items-end ">
        <p
          className="text-xs lg:text-sm font-bold text-center"
          style={{ color: secondaryColor }}
        >
          {contact.title}
        </p>
        <div className="flex flex-col w-full gap-4 ">
          {contact.items.map(({ title, icon, iconColor, link }, index) => {
            return (
              <Link
                href={link}
                target="_blank"
                key={index}
                className="flex gap-8 sm:gap-16 justify-center lg:justify-between items-center"
              >
                <p
                  className="text-xs font-bold"
                  style={{ color: primaryColor }}
                >
                  {title}
                </p>
                <IconComponent
                  iconName={icon}
                  className="w-8 h-auto "
                  height={0}
                  width={0}
                  style={{
                    color: iconColor ? iconColor : primaryColor,
                  }}
                />
              </Link>
            );
          })}
        </div>
        <CustomButton
          text="Contáctanos"
          href="/contactanos"
          bg_hover="#3871C1"
          bg="#67B1EB"
          textColorHover="white"
          textColor="white"
        />
      </div>
    </div>
  );
};
