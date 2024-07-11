import { BannerComponent } from "@/components/banner-component";
import ProductsInfo from "@/config/dataPage_productos";
import { ContentSection } from "./content-section";

export const metadata = {
  title : "Productos",
}

export default function ProductsPage() {
  return (
    <div>
      <BannerComponent
        className="bg-productos"
        descriptionItems={ProductsInfo.banner.descriptionItems}
        title={ProductsInfo.banner.title}
        color={ProductsInfo.banner.itemsColor}
        children={null}
      />
      <ContentSection/>
    </div>
  );
}
