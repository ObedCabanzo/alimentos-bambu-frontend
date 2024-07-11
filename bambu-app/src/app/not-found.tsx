import { CustomButton } from "@/components/custom-button";

export default function NotFound() {
  return (
    <div className="flex flex-col h-screen w-full justify-center items-center bg-[#134E7D] gap-8">
      <div className="flex flex-col text-center text-white relative">
        <h1 className="relative font-bold -bottom-14 tracking-[0.2em]">error</h1>
        <div className="flex text-[96px] h-48">
          <span className="self-start">4</span>
          <span className="self-center">0</span>
          <span className="self-end">4</span>
        </div>
      </div>
      <div className="text-white text-center ">
        <h1 className="font-bold text-xl sm:text-3xl ">OOPS!</h1>
        <h2 className="max-w-64 text-xs sm:text-sm md:text-base">
          No encontramos la pagina que estas buscando {":("}{" "}
        </h2>
      </div>
      <CustomButton
        href="/"
        text="Volver al inicio"
        bg="#fff"
        bg_hover="#67B1EB"
        textColor="#134E7D"
        textColorHover="#fff"
      />
    </div>
  );
}
