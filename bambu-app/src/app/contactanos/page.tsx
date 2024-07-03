import { CustomButton } from "@/components/custom-button";
import { SocialMediaComponent } from "./media-section";
import { FormSection } from "./form-section";
export default function ContactPage() {
  return (
    <div className="flex flex-col lg:flex-row pt-16 sm:pt-20 md:pt-24 lg:pt-28 ">
      <section className="lg:w-1/2 flex flex-col bg-[#3971C1] text-black px-4 sm:px-16 md:px-32 lg:px-16 py-16 sm:py-20 md:py-24 gap-4 ">
        <h1 className="font-bold text-white text-xl sm:text-2xl md:text-3xl">Contáctanos</h1>
        <FormSection/>
        <div className="flex flex-col items-end gap-4">
          
        <CustomButton text="Enviar mensaje" bg="#134E7D" bg_hover="#67B1EB" href="/" textColor="#ddffff" textColorHover="#134E7D" />
          <SocialMediaComponent/>
        </div>
      </section>
      <section className="w-1/2 flex flex-col"></section>
    </div>
  );
}
