"use client"
import "./component-styles.css";
import IconComponent from "./IconComponent";

export const SocialMediaComponent = ({
  className,
  position,
  color,
}: {
  className: string;
  color?: string;
  position?: string;
}) => {
  const socialMedia = [
    {
      id: 0,
      icon: "icon_instagram",
      href: "https://www.instagram.com/pauze_cafeymercadito/",
      hoverColor: "#C13584",
    },
    {
      id: 1,
      icon: "icon_facebook",
      href: "https://www.facebook.com/alimentosbambu",
      hoverColor: "#068FFF",
    },
  ];

  const handleClick = (href: string) => {
    return window.open(href, "_blank");
  };

  return (
    <div
      className={`${className} ${position} flex flex-col gap-5 items-center justify-center sm-component-container  px-1 sm:px-6 lg:px-8`}
    >
      <div className="flex flex-col gap-4">
        {socialMedia.map(({ id, icon, href, hoverColor }) => {
          return (
            <div
              key={id}
              className={"h-6 w-6 md:h-8 md:w-8 cursor-pointer "}
              onClick={() => handleClick(href)}
            >
              <IconComponent
                iconName={icon}
                className={"icon w-full h-auto "}
                style={{
                  transition: "all 0.2s ease-in-out",
                  color: color ? color : "white",
                }}
                onMouseEnter={(e) =>{
                  e.currentTarget.style.color = hoverColor ? hoverColor : "white" ;
                }}
                onMouseLeave={(e) =>{
                  e.currentTarget.style.color = color ? color : "white";
                }}
              />
            </div>
          );
        })}
      </div>
      <span
        className="transform translate-x-1/2 h-4 rounded-xl w-1 self-center"
        style={{
          backgroundColor: color ? color : "white",
        }}
      ></span>
      <p
        className=" transform rotate-180 whitespace-nowrap cursor-vertical-text text-sm"
        style={{
          color: color ? color : "white",
        }}
      >
        SIGUENOS
      </p>
    </div>
  );
};
