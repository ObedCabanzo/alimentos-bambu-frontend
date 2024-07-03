import IconComponent from "@/components/IconComponent";

export const SocialMediaComponent = () => {
  return (
    <>
      <div className="flex items-center gap-2 text-white text-xs sm:text-sm">
        <h1>Siguenos</h1>
        <div className="h-[0.15rem] w-4 bg-white rounded-3xl  " />
        <IconComponent
          iconName="icon_facebook"
          className="text-white h-4 w-4 sm:h-6 sm:w-6 "
        />
        <IconComponent
          iconName="icon_instagram"
          className="text-white h-4 w-4 sm:h-6 sm:w-6"
        />
      </div>
      <div className="flex items-center gap-2 text-white text-xs sm:text-sm">
        <h1>Escribenos por Whatsapp</h1>
        <div className="h-[0.15rem] w-4 bg-white rounded-3xl " />
        <IconComponent
          iconName="icon_whatsapp"
          className="text-white h-4 w-4 sm:h-6 sm:w-6"
        />
      </div>
    </>
  );
};
