import IconComponent from "@/components/IconComponent";
import { SkillsSection } from "./skills-section";
import { ContactSection } from "./contact-section";
import { BannerComponent } from "@/components/banner-component";
export default function EngineeringPage() {
  const primaryColor = "#67B1EB";
  const secondaryColor = "#3871C1";
  const data = {
    title: "Ingeniería Bambú",
    descriptionItems: [
      {
        description:
          "Creemos en una alimentación saludable y segura, nuestro compromiso es con el consumidor, sus necesidades y su bienestar",
        coloredItems: [3, 4, 5, 6, 8,13,14,15,16,17],
        itemColor: primaryColor,
      },
      {
        description:
          "Fabricamos y comercializamos mezclas en polvo para facilitar la preparación de recetas únicas",
        coloredItems: [7,12],
        itemColor: primaryColor,
      },
    ],
    sectionsData: [
      {
        id: 0,
        title: "¿POR QUÉ TRABAJAR CON NOSOTROS?",
        descriptionItems: [
          {
            description:
              "Nos dedicamos a la fabricación y comercialización de mezclas en polvo diseñadas para simplificar y mejorar la preparación.",
            textColor: primaryColor,
          },
          {
            description: ".",
            textColor: "white",
          },

          {
            description: "¿Quieres diseñar un producto a medida?",
            textColor: secondaryColor,
          },
          {
            description: "¿Te gustaría personalizarlo?",
            textColor: secondaryColor,
          },
          {
            description: "¿Quieres algo diferente?",
            textColor: secondaryColor,
          },
          {
            description: ".",
            textColor: "white",
          },
          {
            description:
              "Con nuestra ayuda podemos crear, mejorar o desarrollar soluciones alimenticias ajustadas a tus necesidades.",
            textColor: primaryColor,
          },
        ],
        icon: "icon_bambu",
      },
      {
        id: 1,
        title: "CUALIDADES",
        titleColor: secondaryColor,
        descriptionItems: [
          {
            description:
              "Nos comprometemos a ser su aliado estratégico de confianza, asegurando que, mediante nuestra colaboración, nuestros clientes obtengan beneficios significativos y duraderos.",
            textColor: primaryColor,
          },
        ],
      },
      {
        id: 2,
        title: "¡TRABAJEMOS JUNTOS!",
        descriptionItems: [
          {
            description: "¿Quieres algo a medida o completamente diferente?",
            textColor: secondaryColor,
          },
          {
            description: ".",
            textColor: "white",
          },
          {
            description:
              "¡Contáctanos en redes, teléfono, correo o visítanos en nuestros puntos de producción para convertir tus ideas en sabores inolvidables!",
            textColor: primaryColor,
          },
        ],
      },
    ],

    atributtesItems: [
      {
        title: "Tiempo",
        description: "Mediante recetas fáciles y rápidas de preparar",
        icon: "icon_time",
      },
      {
        title: "Tranquilidad",
        description: "Con productos seguros, saludables y confiables",
        icon: "icon_calm",
      },
      {
        title: "Servicio",
        description:
          "Respuesta oportuna en temas de calidad, capacitación y logística",
        icon: "icon_paper",
      },
      {
        title: "Rentabilidad",
        description:
          "Productos con un costo beneficio interesante para el negocio",
        icon: "icon_chart_2",
      },
      {
        title: "Sensaciones",
        description: "Con atributos sensoriales y nutricionales ideales",
        icon: "icon_sensations",
      },
      {
        title: "Más beneficios",
        description: "Fácil almacenamiento con una vida útil prolongada",
        icon: "icon_benefits",
      },
    ],

    contact: {
      title: "Visítanos o escríbenos a nuestras  redes sociales",
      items: [
        {
          title: "Alimentos Bambú",
          icon: "icon_facebook",
          iconColor: primaryColor,
          link: "https://www.facebook.com/alimentosbambu",
        },
        {
          title: "@AlimentosBambu",
          icon: "icon_instagram",
          iconColor: primaryColor,
          link: "https://www.facebook.com/alimentosbambu",
        },
        {
          title: "+57 (313) 404 5758",
          icon: "icon_whatsapp",
          iconColor: primaryColor,
          link: "https://www.facebook.com/alimentosbambu",
        },
        {
          title: "Cra 34Bis sur #87F - 23",
          icon: "icon_location",
          iconColor: primaryColor,
          link: "https://www.google.com/maps/place/Alimentos+Bamb%C3%BA/@4.6389749,-74.1632345,15z/data=!4m6!3m5!1s0x8e3f9c31d92766ff:0x9372def3dde031e6!8m2!3d4.6389749!4d-74.1632345!16s%2Fg%2F11f__h5cxg?entry=ttu",
        },
        {
          title: "+57 (1) 454 0775",
          icon: "icon_phone",
          iconColor: primaryColor,
          link: "https://www.facebook.com/alimentosbambu",
        },
        {
          title: "alimentosbambu@gmail.com",
          icon: "icon_mail",
          iconColor: primaryColor,
          link: "https://www.facebook.com/alimentosbambu",
        },
      ],
    },
  };

  const formatId = (id: number) => {
    return id + 1 < 10 ? `0${id + 1}` : id + 1;
  };
  return (
    <div>
      <BannerComponent
        title={data.title}
        descriptionItems={data.descriptionItems}
        color="#67B1EB"
        children={null}
      />
      <div className="flex flex-col pb-16 lg:py-16 gap-16 w-full lg:pr-32 items-between ">
        {data.sectionsData.map(({ id, title, descriptionItems }, _) => {
          return (
            <div className="flex w-full flex-col items-center gap-4 ">
              <div className="flex gap-16 w-full  items-center flex-col lg:flex-row lg:items-start">
                <div className="flex gap-4 w-full lg:w-2/5 bg-[#67B1EB] items-center py-8 h-fit text-start">
                  <span className="w-1/6 md:w-32 h-1 rounded-3xl bg-white"></span>
                  <p
                    className="opificio-neue text-white text-base lg:text-lg font-bold "
                    style={{ letterSpacing: "0.1rem" }}
                  >
                    {formatId(id)}
                  </p>
                  <p
                    className="text-white text-sm lg:text-base font-bold "
                    style={{ letterSpacing: "0.1rem" }}
                  >
                    {title}
                  </p>
                </div>
                <div className="flex flex-col gap-4 w-3/5 text-center lg:text-end items-center lg:items-end">
                  <div>
                    {descriptionItems.map(
                      ({ description, textColor }, index) => {
                        return (
                          <p
                            key={index}
                            className="text-xs lg:text-sm font-bold"
                            style={{
                              color: textColor,
                            }}
                          >
                            {description}
                          </p>
                        );
                      }
                    )}
                  </div>

                  {id === 0 && (
                    <IconComponent
                      iconName="icon_bambu"
                      className="h-auto w-32"
                      height={0}
                      width={0}
                    />
                  )}
                </div>
              </div>
              {id === 1 && (
                <SkillsSection attributeItems={data.atributtesItems} />
              )}
              {id === 2 && <ContactSection contact={data.contact} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
