
import { SocialMediaComponent } from "./media-section";
import { FormSection } from "./form-section";
import { MapComponent } from "@/components/ComponentMap/index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactanos",
  description: "¿Tienes alguna duda o sugerencia? Contáctanos y te responderemos lo más pronto posible.",
};


export default function ContactPage() {
  return (
    <div className="flex flex-col lg:flex-row pt-16 sm:pt-20 md:pt-24 lg:pt-28 ">
      <section className="lg:w-1/2 flex flex-col bg-[#3971C1] text-black px-4 sm:px-16 md:px-32 lg:px-16 py-16 sm:py-20 md:py-24 gap-4 ">
        <h1 className="font-bold text-white text-xl sm:text-2xl md:text-3xl">
          Contáctanos
        </h1>
        <FormSection />
        <div className="flex flex-col items-end gap-4">
          
          <SocialMediaComponent />
        </div>
      </section>
      <section className="w-1/2 hidden lg:flex flex-col">
        <MapComponent
          coordinates={{
            lat: 4.639231543829626,
            lng: -74.1632130466491,
          }}
          text="Si deseas visitar nuestra sede central, presiona el siguiente botón"
          href="https://www.google.com/maps/place/Alimentos+Bamb%C3%BA/@4.6389749,-74.1658094,17z/data=!4m16!1m9!3m8!1s0x8e3f9c31d92766ff:0x9372def3dde031e6!2sAlimentos+Bamb%C3%BA!8m2!3d4.6389749!4d-74.1632345!9m1!1b1!16s%2Fg%2F11f__h5cxg!3m5!1s0x8e3f9c31d92766ff:0x9372def3dde031e6!8m2!3d4.6389749!4d-74.1632345!16s%2Fg%2F11f__h5cxg?entry=ttu"
          textColor="#3871C1"
          buttonColor="#67B1EB"
          buttonColorHover="#134E7D"
          buttonTextColor="white"
          buttonTextColorHover="white"
        />
      </section>
    </div>
  );
}
