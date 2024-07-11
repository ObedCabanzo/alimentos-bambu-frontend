import { HomeRecipiesButton } from "@/components/ComponentHomeBanner/home-recepies-component";
import { BannerComponent } from "@/components/banner-component";

export default function BannerSection() {
  const descriptionList = ["Sabores ÚNICOS,", "preparación SIN COMPLICACIONES"];

  const letterList = [
    { letter: "B", color: "primary-color", self: "self-start" },
    { letter: "a", color: "primary-color", self: "self-end" },
    { letter: "m", color: "primary-color", self: "self-start" },
    { letter: "b", color: "secondary-color", self: "self-end" },
    { letter: "ú", color: "primary-color", self: "self-start" },
  ];
  return (
    <BannerComponent >
      {descriptionList.map((description, index) => (
        <h2
          key={index}
          className="text-xs sm:text-xl md:text-2xl lg:text-3xl text-white text-center"
        >
          {description}
        </h2>
      ))}
      <div className="h-3" />

      <div className="flex flex-col items-center">
        <h1 className="home-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
          somos
        </h1>
      </div>
      <div className=" sm:h-6"></div>

      <h1 className="home-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
        Alimentos
      </h1>
      <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-5 h-12 sm:h-16 md:h-20 lg:h-24 ">
        {letterList.map((letter, index) => (
          <h1
            key={index}
            className={`home-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${letter.color} ${letter.self} `}
          >
            {letter.letter}
          </h1>
        ))}
      </div>
      <div className="h-8 sm:h-20"></div>

      <HomeRecipiesButton href="/products" />

      
    </BannerComponent>
  );
}
