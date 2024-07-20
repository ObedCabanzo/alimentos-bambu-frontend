import { BannerComponent } from "@/components/banner-component";
import ProductsInfo from "@/config/dataPage_productos";
import { ContentSection } from "./content-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title : "Productos",
  description: "Descubre nuestra variedad de productos."
}

export default function ProductsPage() {
  return (
    <div>
      <BannerComponent
        className="bg-productos"
        descriptionItems={ProductsInfo.banner.descriptionItems}
        title={ProductsInfo.banner.title}
        color={ProductsInfo.banner.itemsColor}
      />
      <ContentSection/>
    </div>
  );
}
