import IconComponent from "@/components/IconComponent";
import { LocationComponent } from "./location-component";
import { BambuSocialMedia } from "@/config/data_social_media";
import Link from "next/link";

export const SocialMediaComponent = () => {
  return (
    <>
      <div className="flex items-center gap-2 text-white text-xs sm:text-sm">
        <h1>Siguenos</h1>
        <div className="h-[0.15rem] w-4 bg-white rounded-3xl  " />
        <Link href={BambuSocialMedia[0].href} target="_blank">
          <IconComponent
            iconName="icon_facebook"
            className="text-white h-4 w-4 sm:h-6 sm:w-6 cursor-pointer"
          />
        </Link>
        <Link href={BambuSocialMedia[1].href} target="_blank">
          <IconComponent
            iconName="icon_instagram"
            className="text-white h-4 w-4 sm:h-6 sm:w-6 cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex items-center gap-2 text-white text-xs sm:text-sm ">
        <h1>Escribenos por Whatsapp</h1>
        <div className="h-[0.15rem] w-4 bg-white rounded-3xl " />
        <Link href={BambuSocialMedia[3].href} target="_blank">
          <IconComponent
            iconName="icon_whatsapp"
            className="text-white h-4 w-4 sm:h-6 sm:w-6 cursor-pointer"
          />
        </Link>
      </div>
      <LocationComponent href={BambuSocialMedia[4].href} />
    </>
  );
};
