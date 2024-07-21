
import { Metadata } from "next";
import ContentSection from "./content-section";
import CategoriesData from "@/config/data_categories";
//Dinamic metadata

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Productos ${params.categorie}`,
    description: getCategorieDescription(params.categorie),
  };
};

const getCategorieDescription = (category: string) => {
  return Object.entries(CategoriesData).find(([key, value]) => key === category)?.[1].description;
}

type Props = {
  params: {
    categorie: string;
  };
};

export default function CategoriePage() {
  return (
      <div className=" lg:py-16 w-full " id="productstop">
        <ContentSection />
      </div>
  );
}
