
import { CategorieButton } from "./categorie-button";
import CategoriesData from "@/config/data_categories";

export const CategoriesList = () => {

  return (
    <>
      {CategoriesData.map((category, index) => (
        <CategorieButton
          key={index}
          id={category.id}
          title={category.title}
          titleColor="#496623"
          icon={category.icon}
          iconColor="#496623"
        />
      ))}
      
    </>
  );
};
