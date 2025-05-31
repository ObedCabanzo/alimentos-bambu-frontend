const HomeInfo = {
  categories_section: {
    description: "Descubre nuestras selecciones de alimentos y productos",
    background_color: "#A5D843",
    title: "CATEGORIAS DE PRODUCTOS",
    title_color: "#496623",
    description_color: "white",
    buttonInfo: {
      button_bg_color: "white",
      button_bg_hover_color: "#496623",
      button_text_color: "#496623",
      button_text_hover_color: "white",
    }
  },

  skills_section: {
    title: "¡CREA TUS PROPIOS PRODUCTOS!",
    description: "Con nuestra colaboración, podemos diseñar soluciones alimenticias que se adapten perfectamente a tus necesidades.",
    buttonInfo: {
      text: "¡Trabajemos juntos!",
      background_color: "#1B75BB",
      href: "/contactanos",
      text_color: "white",
      background_color_hover: "#134E7D",
      text_color_hover: "white",
    },
    skills: [
      {
        id: 0,
        title: {
          text: "Productos totalmente",
          className: "text-black",
        },
        subtitle: {
          text: "personalizados",
          className: "text-blue-400 font-bold",
        },
        icon: "icon_pen",
        self: "self-end",
      },
      {
        id: 1,
        title: {
          text: "Mejora",
          className: "text-blue-400 font-bold",
        },
        subtitle: {
          text: "tus productos",
          className: "text-black",
        },
        icon: "icon_chart",
        self: "self-start",
      },
      {
        id: 2,
        title: {
          text: "Diseñamos productos",
          className: "text-black",
        },
        subtitle: {
          text: "innovadores",
          className: "text-blue-400 font-bold ", //rgb(44, 169, 188)
        },
        icon: "icon_idea",
        self: "self-end",
      },
    ],
  },
  allies_section: {
     items: [
    {
      id: 1,
      name: "Agro S.A.",
      details: "Líderes en la producción de insumos agrícolas orgánicos, comprometidos con la sostenibilidad.",
      imageUrl: "/images/allies/agro-sa-banner.jpg", // Main visual for the ally
      // logoIcon: "icon_agro_logo" // Optional, if you prefer an IconComponent
    },
    {
      id: 2,
      name: "Transportes Veloz",
      details: "Socios logísticos eficientes, garantizando la entrega fresca y puntual de nuestros productos.",
      imageUrl: "/images/allies/transportes-veloz-image.png",
    },
    // ... more allies
  ],
  }
};

export default HomeInfo;
