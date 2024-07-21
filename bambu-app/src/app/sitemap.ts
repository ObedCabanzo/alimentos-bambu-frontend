import CategoriesData from "@/config/data_categories";
import { MetadataRoute } from "next";

const categoriesUrls = Object.keys(CategoriesData).map((categorie) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/productos/${categorie}`,
    }));

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/bital`,
    },
    {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/conocenos`,
    },
    {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/contactanos`,
    },
    {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/ingenieria`,
    },
    {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/pauze`,
    },
    {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/productos`,
    },
    ... categoriesUrls
  ];
}
