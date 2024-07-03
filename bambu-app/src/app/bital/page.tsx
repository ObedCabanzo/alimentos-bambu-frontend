import { BannerComponent } from "@/components/banner-component";
import { CustomButton } from "@/components/custom-button";
import IconComponent from "@/components/IconComponent";
import Image from "next/image";

export default function BrandPage() {
  const data = {
    description:
      "En cada producto Bitäl, encontrarás el cuidado y la dedicación que ponemos en ofrecerte alternativas sabrosas que respetan tus elecciones de estilo de vida. ",
    features: [
      {
        title: "Caracteristica",
        description: "Descripción de la caracteristica",
        icon: "icon_idea",
      },
      {
        title: "Caracteristica",
        description: "Descripción de la caracteristica",
        icon: "icon_idea",
      },
      {
        title: "Caracteristica",
        description: "Descripción de la caracteristica",
        icon: "icon_idea",
      },
    ],
    section_products: {
      title: "¿Quieres explorar los productos de nuestra marca?",
      description:
        "Visita nuestra línea de productos y descubre todo lo que bital trae para ti",
      buttonDescription: "Explorar",
      buttonColor: "#9F2746",
      urlImage: "image_conocenos_section.png",
    },
  };
  return (
    <div>
      <BannerComponent bgColor="#9F2746" className="bg-container-color">
        <div className=" flex w-full py-16">
          <IconComponent
            iconName="icon_bital"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
          />
        </div>
      </BannerComponent>
      <section className="flex flex-col items-center bg-white py-8 px-8 gap-4 sm:py-16  sm:px-16 md:px-32 lg:px-64 sm:gap-6">
        <h1 className="font-bold text-center text-lg sm:text-xl md:text-2xl lg:text-3xl ">
          <span className="text-[#9F2746]">Bital </span> es una marca de{" "}
          <span className="text-[#3871C1]">Alimentos </span>
          <span className="text-[#76BB2C]">Bam</span>
          <span className="text-[#3871C1]">b</span>
          <span className="text-[#76BB2C]">ú</span>
        </h1>

        <h2 className="font-bold text-center text-xs sm:text-sm md:text-base ">
          {data.description}
        </h2>
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 sm:gap-6">
          {data.features.map(({ title, description, icon }) => {
            return (
              <div className="flex items-center gap-4">
                <IconComponent iconName={icon} className="w-8 h-8" />
                <div className="h-5 w-1 bg-[#9F2746] rounded-3xl" />
                <div>
                  <h1 className="font-bold text-center text-sm sm:text-base ">
                    {title}
                  </h1>
                  <h2 className=" text-center text-xs sm:text-sm ">
                    {description}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="flex flex-col sm:flex-row">
        <div className="sm:w-1/2 bg-[#9F2746] flex flex-col px-4 py-8 gap-4 sm:px-8 sm:py-12  md:px-16  lg:px-24 lg:py-16 items-center sm:items-start">
          <h1 className="text-[#402419] font-bold text-center sm:text-start text-sm sm:text-base">
            {data.section_products.title}
          </h1>
          <h2 className="text-white text-center text-xs sm:text-sm sm:text-start">
            {data.section_products.description}
          </h2>
          <CustomButton
            bg="white"
            bg_hover="#402419"
            href="/productos"
            textColor={data.section_products.buttonColor}
            textColorHover="white"
            text={data.section_products.buttonDescription}
            className="w-full gap-4 py-2 sm:w-2/3"
          />
        </div>
        <div className="hidden sm:flex relative w-1/2" >
          <Image
            src={"/images/".concat(data.section_products.urlImage)}
            layout="fill"
            objectFit="cover"
            alt="banner_image"
            
          />
        </div>
      </section>
    </div>
  );
}
