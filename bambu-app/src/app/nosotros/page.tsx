import { BannerComponent } from "@/components/banner-component";
import { CustomButton } from "@/components/custom-button";
import Image from "next/image";
import { MemberComponent } from "./member-card";

export default function AboutPage() {
  const data = {
    title: "Conócenos ",
    color: "#80CC28",
    descriptionItems: [
      {
        description:
          "Explora nuestra identidad, comprende nuestra misión, visión y principios. ",
        coloredItems: [],
      },
    ],
    heroSection: {
      title: "Nuestra experiencia y nuestro equipo nos hacen quienes somos",
      titleColor: "#134E7D",
      description:
        "En Alimentos Bambú nos esforzamos por promover una alimentación saludable y segura, comprometiéndonos plenamente con el consumidor, atendiendo sus necesidades y velando por su bienestar y sus intereses",
      descriptionColor: "white",
      buttonDescription: "Conoce más",
      buttonColor: "#3971C1",
      bgHoverColor: "#134E7D",
      bgColor: "#67B1EB",
      heroImage: "image_conocenos_section.png",
    },
    mision: {
      title: "Nuestra Misión",
      description:
        "Proveer productos de calidad, saludables y seguros, que satisfagan las necesidades de nuestros consumidores, promoviendo un estilo de vida saludable y sostenible.",
      bgColor: "#3871C1",
    },
    vision: {
      title: "Nuestra Visión",
      description:
        "Ser una empresa líder en la fabricación y comercialización de productos alimenticios saludables y sostenibles, reconocida por su calidad e innovación.",
      bgColor: "#80CC28",
    },
    team: {
      title: "Conoce a las personas que hacen posible Alimentos Bambú.",
      members: [
        {
          name: "Juan Pérez",
          position: "CEO",
          descriptionItems: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
          ],
          img: "image_profile_test.jpg",
        },
        {
          name: "Juan Pérez",
          position: "CEO",
          descriptionItems: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
          ],
          img: "image_profile_test.jpg",
        },
      ],
    },
  };
  return (
    <div>
      <BannerComponent
        className="bg-conocenos"
        children={null}
        title={data.title}
        descriptionItems={data.descriptionItems}
        color={data.color}
      />
      <section
        className="w-full"
        style={{
          backgroundColor: data.heroSection.bgColor,
        }}
      >
        <div className="flex w-full items-center ">
          <div className="flex lg:w-1/2 h-auto flex-col px-8 py-16 sm:px-16 gap-4 text-start">
            <h1 className="text-base sm:text-lg font-bold text-blue-900">
              {data.heroSection.title}
            </h1>
            <p className="text-white text-sm sm:text-base">
              {data.heroSection.description}
            </p>
            <CustomButton
              bg={data.heroSection.buttonColor}
              bg_hover={data.heroSection.bgHoverColor}
              href="/"
              text={data.heroSection.buttonDescription}
            />
          </div>
          <div className="relative w-1/2 h-[70vh] hidden lg:flex justify-center items-center">
            <Image
              src={`/images/${data.heroSection.heroImage}`}
              layout="fill"
              objectFit="cover"
              alt="hero image"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row">
        <div
          className="w-full lg:w-1/2 flex flex-col px-8 py-16 sm:px-16"
          style={{
            backgroundColor: data.mision.bgColor,
          }}
        >
          <h1 className="text-white font-bold text-base sm:text-lg">
            {data.mision.title}
          </h1>
          <p className="text-white text-sm sm:text-base">
            {data.mision.description}
          </p>
        </div>
        <div
          className="w-full lg:w-1/2 flex flex-col px-8 py-16 sm:px-16"
          style={{
            backgroundColor: data.vision.bgColor,
          }}
        >
          <h1 className="text-white font-bold text-base sm:text-lg">
            {data.vision.title}
          </h1>
          <p className="text-white text-sm sm:text-base">
            {data.vision.description}
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center gap-8 py-16 px-8 sm:px-16">
        <div className="w-fit flex flex-col items-center gap-2">
          <h1 className="text-base sm:text-lg font-bold text-[#496623] text-center">
            {data.team.title}
          </h1>
          <div className="w-1/3 h-1 bg-[#76BB2C] rounded-2xl" />
        </div>
        <div className="flex flex-col lg:flex-row gap-16">
          {data.team.members.map((member, index) => (
            <MemberComponent
              key={index}
              image={member.img}
              name={member.name}
              position={member.position}
              descriptionItems={member.descriptionItems}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
