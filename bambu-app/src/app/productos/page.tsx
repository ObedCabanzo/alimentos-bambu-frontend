"use client";
import IconComponent from "@/components/IconComponent";
import { SearchBar } from "./searchBar-section";
import { OrderButton } from "./order-button";
import { ProductsList } from "./productsList-section";
import { CategoriesList } from "./categoriesList-section";
import { ProductProvider } from "@/components/context/products-context";
import { useState } from "react";
import { BannerComponent } from "@/components/banner-component";

const primaryColor = "#496623";
const secondaryColor = "#B4E84E";
const data = {
  title: "Nuestros productos",
  descriptionItems: [
    {
      description:
        "Bienvenido a nuestra selección de productos deliciosos y frescos. Descubre sabores auténticos y opciones para todos los gustos",
      coloredItems: [6, 7, 8, 10, 11],
      itemColor: secondaryColor,
    },
    {
      description: "¡Disfruta de una experiencia gastronómica única!",
      coloredItems: [0, 1, 2, 3, 4, 5],
      itemColor: secondaryColor,
    },
  ],
  categories: [
    {
      title: "Pasteleros",
      icon: "icon_cake",
    },
    {
      title: "Crunch",
      icon: "icon_waffle",
    },
    {
      title: "Bebidas",
      icon: "icon_drink",
    },
    {
      title: "Bitäl (Veganos)",
      icon: "icon_calm",
    },
  ],
};


export default function ProductsPage() {
  const [hideCategories, setHideCategories] = useState(false);
  return (
    <div>
      <BannerComponent
        className="bg-productos"
        descriptionItems={data.descriptionItems}
        title={data.title}
        color="#B4E84E"
        children={null}
      />
      <ProductProvider>
        <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-between px-4 sm:px-8 md:px-16 gap-4">
          {/*Categories div*/}
          <div className=" lg:sticky lg:top-28 flex flex-col sm:flex-row w-full lg:w-fit justify-between items-center  lg:flex-col lg:items-start px-4 sm:px-8 py-4 sm:py-8 lg:py-16  gap-8 lg:gap-4">
            <div className="flex w-full justify-between">
              <div>
                <h1 className="text-xl text-[#496623] font-bold ">
                  {" "}
                  CATEGORIAS{" "}
                </h1>
                <span className="w-2/3 h-1 bg-[#B4E84E] rounded-3xl block mt-2" />
              </div>

              <IconComponent
                iconName="icon_go_next"
                className="h-6 w-auto  text-[#496623] cursor-pointer transition-all sm:hidden  "
                onClick={() => {
                  setHideCategories(!hideCategories);
                }}
                style={{
                  transform: hideCategories ? "rotate(90deg)" : "rotate(270deg)",
                }}
              />
            </div>

            <div
              className={
                "hidden sm:flex lg:flex-col lg:flex-nowrap flex-wrap gap-2 justify-center sm:justify-end lg:gap-4 transform transition-all "
              }
              style={{
                display: hideCategories ? "" : "flex",
              }}
            >
              <CategoriesList />
            </div>
          </div>
          <div className=" lg:py-16 w-full ">
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
              <SearchBar />
              <OrderButton />
            </div>
            <div>
              <ProductsList />
            </div>
          </div>
        </div>
      </ProductProvider>
    </div>
  );
}
