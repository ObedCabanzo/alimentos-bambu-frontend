import Link from "next/link";
import IconComponent from "@/components/IconComponent";
import "@/components/component-styles.css";
import { BambuSocialMedia } from "@/config/data_social_media";

export const FooterLogo = () => {
  return (
    <div className="relative flex flex-col justify-center items-center gap-2 cursor-pointer">
      <Link href={"/"}>
        <IconComponent
          iconName="icon_bambu_white"
          className="h-full w-32 sm:w-40"
        />
      </Link>
      <div className="flex gap-2">
        {BambuSocialMedia.map(({ id, href, icon }) => {
          return (
            <Link
              key={id}
              className="bg-white rounded-full p-2 sm:p-3 cursor-pointer"
              target={href.startsWith("/") ? "" : "_blank"}
              href={href}
            >
              <IconComponent
                iconName={icon}
                className={"icon h-5 w-5 sm:h-6 sm:w-6 text-[#134E7D]"}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export const FoooterLinks = () => {
  const Links = [
    {
      id: 0,
      name: "Quienes somos",
      href: "/conocenos",
    },
    {
      id: 1,
      name: "Nuestros productos",
      href: "/productos",
    },
    {
      id: 2,
      name: "Contáctanos",
      href: "/contactanos",
    },
    {
      id: 3,
      name: "Pauzé",
      href: "/pauze",
    },
    {
      id: 4,
      name: "Nuestra Marca - BITAL",
      href: "/bital",
    },
    {
      id: 5,
      name: "Ingeniería Bambú",
      href: "/ingenieria",
    },
  ];
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  grid-cols-max">
      {Links.map(({ id, name, href }) => {
        return (
          <Link key={id} className="w-auto px-8 py-1 text-sm" href={href}>
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export const FooterAddress = () => {
  const className = "icon h-5 w-5 sm:h-6 sm:w-6";
  const AdressLinks = [
    {
      id: 0,
      name: "Cra 34Bis sur #87F - 23",
      icon: "icon_location",
      link: "https://www.google.com/maps/place/Alimentos+Bamb%C3%BA/@4.6389749,-74.1658094,17z/data=!4m16!1m9!3m8!1s0x8e3f9c31d92766ff:0x9372def3dde031e6!2sAlimentos+Bamb%C3%BA!8m2!3d4.6389749!4d-74.1632345!9m1!1b1!16s%2Fg%2F11f__h5cxg!3m5!1s0x8e3f9c31d92766ff:0x9372def3dde031e6!8m2!3d4.6389749!4d-74.1632345!16s%2Fg%2F11f__h5cxg?entry=ttu",
    },
    {
      id: 1,
      name: "+57 (1) 454 0775",
      icon: "icon_phone",
      link: "",
    },
    {
      id: 2,
      name: "+57 (313) 404 5758",
      icon: "icon_whatsapp",
      link: "https://wa.me/573134045758",
    },
  ];
  return (
    <section className="footer-address-container flex flex-col items-center gap-4 justify-cente rounded-xl px-8 py-4">
      <p>Encuentranos:</p>
      <div className="flex flex-col gap-2">
        {AdressLinks.map(({ id, name, icon, link }) => {
          return (
            <Link
              key={id}
              className={"flex gap-2 justify-center  text-center text-sm ".concat(
                link ? "" : "cursor-default"
              )}
              href={link ? link : ""}
              target={link ? "_blank" : ""}
              unselectable="off"
            >
              {name}
              <IconComponent iconName={icon} className={className} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};
