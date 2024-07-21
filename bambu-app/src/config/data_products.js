const categories = {
  bebidas: "bebidas",
  pasteleros: "pasteleros",
  bital: "veganos",
  crunch: "brunch",
}

const ProductsData = [
  {
    
    title: "CREMA DE AVENA",
    subtitle:
      "Nuestra crema de avena Bitäl, es una mezcla en polvo lista para preparar avena tipo cubana, su elaboración es a base de avena y arroz",
    description:
      "Su preparación es muy fácil, se puede hacer con cualquier tipo de leche, tan sólo requiere un licuado corto para obtener una bebida típica, deliciosa y lo más importante, saludable",
    imageName: "image_product_1.png",
    categories: [categories.bebidas, categories.bital],
    isBrand: true,
    benefits: [
      {
        title: "Sin azúcar añadido",
        icon: "icon_sugar_free",
        iconColor: "black",
      },
      {
        title: "Vegano",
        icon: "icon_vegan",
        iconColor: "black",
      },
      {
        title: "Bajo contenido de Gluten",
        icon: "icon_gluten",
        iconColor: "black",
      },
      {
        title: "Buena fuente de fibra",
        icon: "icon_fiber",
        iconColor: "black",
      },
      {
        title: "Sin conservantes artificiales",
        icon: "icon_idea",
        iconColor: "black",
      },
    ],
    presentations: [
      {
        quantity_grams: 210,
        quantity_glass: 24,
        units_box: 2,
      },
    ],
  },
  {
    title: "LIMONADA DE COCO",
    subtitle: "Mezcla en polvo para preparar Limonada de Coco",
    description:
      "Excelente acompañamiento para cualquier comida, solo requiere hielo, agua y un poco de zumo de limón si lo desea, para disfrutar una bebida refrescante",
    imageName: "image_product_2.png",
    categories: [categories.bebidas],
    isBrand: false,
    benefits: [
      {
        title: "Pulpa de limón",
        icon: "icon_idea",
        iconColor: "black",
      },
      {
        title: "Crema de coco",
        icon: "icon_idea",
        iconColor: "black",
      },
      {
        title: "Practica y rápida",
        icon: "icon_idea",
        iconColor: "black",
      },
    ],
    presentations: [
      {
        quantity_grams: 500,
        quantity_glass: 10,
        units_box: 22,
      },
      {
        quantity_grams: 3000,
        quantity_glass: 2,
        units_box: 132,
      },
    ],
  },
  
];
export default ProductsData;
