export type Product = {
  title: string;
  subtitle: string;
  description: string;
  imageName: string;
  categories: string[];
  isBrand: boolean;
  benefits: {
    title: string;
    icon: string;
    iconColor: string;
  }[];
  presentations: {
    quantity_grams: number;
    quantity_glass: number;
    units_box: number;
  }[];
};

export type Category = {
  id: number;
  title: string;
  icon: string;
};
