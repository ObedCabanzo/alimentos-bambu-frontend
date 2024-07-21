"use client"
import { SearchBar } from "./searchBar-section";
import { OrderButton } from "./order-button";
import { ProductsList } from "./productsList-section";
import { ProductProvider } from "@/components/context/products-context";

export default function ContentSection({categorie}:{categorie:string}) {
  return (
    <ProductProvider>
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
          <SearchBar />
          <OrderButton />
        </div>
        <div>
          <ProductsList />
        </div>
    </ProductProvider>
  );

}