import { Category } from "@/components/model/types";
import { CategorieButton } from "./categorie-button";
import { useEffect, useState } from "react";

export const CategoriesList = () => {
  const [categoriesList, setCategoriesList] = useState<Category[]>([]); // [1
  const fetchCategories = async () => {
    const response = await fetch("/data/productos/categories.json");
    const data = await response.json();
    console.log(data);
    return data as Category[];
  };

  useEffect(() => {
    fetchCategories().then((data) => setCategoriesList(data));
  }, []);
  return (
    <>
      {categoriesList.map((category, index) => (
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
