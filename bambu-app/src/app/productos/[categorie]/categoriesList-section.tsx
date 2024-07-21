
import { CategorieButton } from "./categorie-button";
import CategoriesData from "@/config/data_categories";

export const CategoriesList = () => {

  return (
    <>
      {Object.entries(CategoriesData).map(([key, value], index) => (
        <CategorieButton
          key={index}
          id = {key}
          title={value.title}
          titleColor="#496623"
          icon={value.icon}
          iconColor="#496623"
        />
      ))}
      
    </>
  );
};
