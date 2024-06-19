import Link from "next/link";
import IconComponent from "./IconComponent";
import "./component-styles.css";

export const FooterLogo = () => {
  const iconClassName = "icon h-5 w-5 sm:h-6 sm:w-6";
  const socialMedia = [
    {
      id: 0,
      href: "https://www.facebook.com/alimentosbambu",
      icon: "icon_rounded_facebook" ,
    },
    {
      id: 1,
      href: "https://www.instagram.com/alimentosbambu",
      icon: "icon_rounded_instagram",
    },
    {
      id: 2,
      href: "undefined",
      icon: "icon_rounded_mail",
    },
    {
      id: 3,
      href: "undefined",
      icon: "icon_rounded_whatsapp",
    },
  ];

  return (
    <div className="relative flex flex-col justify-center items-center gap-2 cursor-pointer">
      <IconComponent iconName="icon_bambu_white" className="h-full w-32 sm:w-40" />
      <div className="flex gap-2">
        {socialMedia.map(({ id, href, icon }) => {
          return (
            <div
              key={id}
              className="bg-white rounded-full p-2 sm:p-3 cursor-pointer"
            >
             <IconComponent iconName={icon} className={iconClassName}/>
            </div>
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
      href: "/about",
    },
    {
      id: 1,
      name: "Nuestros productos",
      href: "/products",
    },
    {
      id: 2,
      name: "Contáctanos",
      href: "/contact",
    },
    {
      id: 3,
      name: "Pauzé",
      href: "/pauze",
    },
    {
      id: 4,
      name: "Nuestra Marca - BITAL",
      href: "/brand",
    },
    {
      id: 5,
      name: "Ingeniería Bambú",
      href: "/engineering",
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
      link: "",
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
      link: "",
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
              className="flex gap-2 justify-center cursor-pointer text-center text-sm"
              href={link}
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
