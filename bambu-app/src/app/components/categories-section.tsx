import "./styles.css";
import { CustomButton } from "@/components/custom-button";
import { CategoriesSlider } from "./categories-slider";

export default function CategoriesHomeSection() {
  const categories = {
    description: "Descubre nuestras selecciones de alimentos y productos",
    title: "CATEGORIAS DE PRODUCTOS",

    list: [
      {
        id: 1,
        title: "Brunch",
        description:
          "¡Endulza tu día con nuestros irresistibles pancakes y waffles!",
        icon: "icon_waffle",
      },
      {
        id: 2,
        title: "Bebidas",
        description:
          "¡Refresca tu dia con nuestras deliciosas malteadas, limonadas, avenas y mucho más!",
        icon: "icon_drink",
      },
      {
        id: 3,
        title: "Pasteleros",
        description:
          "¡Dulcifica tu día con nuestros exquisitos productos pasteleros!",
        icon: "icon_waffle",
      },
      
      {
        id: 4,
        title: "Pasteleros",
        description:
          "¡Dulcifica tu día con nuestros exquisitos productos pasteleros!",
        icon: "icon_cake",
      },
      
      {
        id: 5,
        title: "Pasteleros",
        description:
          "¡Dulcifica tu día con nuestros exquisitos productos pasteleros!",
        icon: "icon_cake",
      },
      {
        id: 6,
        title: "Pasteleros",
        description:
          "¡Dulcifica tu día con nuestros exquisitos productos pasteleros!",
        icon: "icon_cake",
      },
      
    ],
  };

  const textColor = "text-white";

  return (
    <section>
      <div className="flex flex-col lg:flex-row justify-between">
        <div
          className={`relative banner-left-container ${textColor} px-10 py-8 lg:px-20 flex flex-col sm:flex-row lg:flex-col  justify-between lg:justify-center items-center md:items-center lg:items-start  gap-2 w-full md:w-full lg:w-2/5 `}
        >
          <p className="opificio-bold categories-title text-xl sm:text-2xl text-center sm:text-start ">
            {categories.title}
          </p>
          <div className="flex flex-col gap-4 justify-center items-center sm:items-end lg:items-start ">
            <p className=" text-center sm:text-end lg:text-start">
              {categories.description}
            </p>
            <CustomButton
              text="Explorar"
              href="/productos"
              bg="#FFFFFF"
              bg_hover="#496623"
              textColor="#496623"
              textColorHover="#FFFFFF"
              blank={false}
            />
          </div>
        </div>
        <CategoriesSlider categories={categories.list} />
      </div>
    </section>
  );
}
