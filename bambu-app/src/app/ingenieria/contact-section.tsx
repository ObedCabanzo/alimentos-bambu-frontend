import { CustomButton } from "@/components/custom-button";
import IconComponent from "@/components/IconComponent";
import MapComponent from "@/components/map-component";
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
    <div className="flex w-full flex-row flex-wrap-reverse justify-end items-center px-16 pt-8 gap-8 z-5">
      <div className="w-full lg:w-2/5 h-64">
        <MapComponent />
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
          textColor="white"
        />
      </div>
    </div>
  );
};
