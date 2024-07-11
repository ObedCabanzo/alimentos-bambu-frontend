"use client"
import { ProductProvider } from "@/components/context/products-context";
import { CategoriesSection } from "./categories-section";
import { SearchBar } from "./searchBar-section";
import { OrderButton } from "./order-button";
import { ProductsList } from "./productsList-section";

export const ContentSection = () => {
  return (
    <ProductProvider>
      <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-between px-4 sm:px-8 md:px-16 gap-4">
        {/*Categories div*/}
        <CategoriesSection />
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
  );
};
