import { BannerComponent } from "@/components/banner-component";
import ProductsInfo from "@/config/dataPage_productos";


export default function CategorieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <BannerComponent
        className="bg-productos"
        descriptionItems={ProductsInfo.banner.descriptionItems}
        title={ProductsInfo.banner.title}
        color={ProductsInfo.banner.itemsColor}
      />
      {children}
    </div>
  );
}
