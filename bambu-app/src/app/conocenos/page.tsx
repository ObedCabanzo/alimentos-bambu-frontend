
import { BannerComponent } from "@/components/banner-component";
import { CustomButton } from "@/components/custom-button";
import { MemberComponent } from "./member-card";
import ConocenosInfo from "@/config/dataPage_conocenos";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conocenos",
  description: "Explora nuestra identidad, comprende nuestra misión, visión y principios.",
};


export default async function AboutPage() {

  return (

    <div>
      <BannerComponent
        className="bg-conocenos"
        title={ConocenosInfo.banner.title}
        descriptionItems={ConocenosInfo.banner.descriptionItems}
        color={ConocenosInfo.banner.color}
      />
      <section
        className="w-full"
        style={{
          backgroundColor: ConocenosInfo.heroSection.bgColor,
        }}
      >
        <div className="flex w-full items-center ">
          <div className="flex lg:w-1/2 h-auto flex-col px-8 py-16 sm:px-16 gap-4 text-start">
            <h1 className="text-base sm:text-lg font-bold text-blue-900">
              {ConocenosInfo.heroSection.title}
            </h1>
            <p className="text-white text-sm sm:text-base">
              {ConocenosInfo.heroSection.description}
            </p>
            <CustomButton
              bg={ConocenosInfo.heroSection.buttonColor}
              bg_hover={ConocenosInfo.heroSection.bgHoverColor}
              href="/ingenieria"
              text={ConocenosInfo.heroSection.buttonDescription}
              textColor="white"
              textColorHover="white"
            />
          </div>
          <div className="relative w-1/2 h-[70vh] hidden lg:flex justify-center items-center">
            <Image
              src={`/images/${ConocenosInfo.heroSection.heroImage}`}
              fill
              style={{ objectFit: "cover" }}
              sizes="500px"
              alt="hero image"
              priority={true}
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row">
        <div
          className="w-full lg:w-1/2 flex flex-col px-8 py-16 sm:px-16"
          style={{
            backgroundColor: ConocenosInfo.mision.bgColor,
          }}
        >
          <h1 className="text-white font-bold text-base sm:text-lg">
            {ConocenosInfo.mision.title}
          </h1>
          <p className="text-white text-sm sm:text-base">
            {ConocenosInfo.mision.description}
          </p>
        </div>
        <div
          className="w-full lg:w-1/2 flex flex-col px-8 py-16 sm:px-16"
          style={{
            backgroundColor: ConocenosInfo.vision.bgColor,
          }}
        >
          <h1 className="text-white font-bold text-base sm:text-lg">
            {ConocenosInfo.vision.title}
          </h1>
          <p className="text-white text-sm sm:text-base">
            {ConocenosInfo.vision.description}
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center gap-8 py-16 px-8 sm:px-16">
        <div className="w-fit flex flex-col items-center gap-2">
          <h1 className="text-base sm:text-lg font-bold text-[#496623] text-center">
            {ConocenosInfo.team.title}
          </h1>
          <div className="w-1/3 h-1 bg-[#76BB2C] rounded-2xl" />
        </div>
        <div className="flex flex-col lg:flex-row gap-16">
          {ConocenosInfo.team.members.map((member, index) => (
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
