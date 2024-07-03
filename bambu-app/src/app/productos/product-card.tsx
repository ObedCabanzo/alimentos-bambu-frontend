import IconComponent from "@/components/IconComponent";
import Image from "next/image";
import { Product } from "@/components/model/types";
export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="flex gap-8 lg:gap-16 flex-col lg:flex-row  items-center justify-center   ">
      <div className="relative flex h-fit  flex-col sm:flex-row lg:flex-col gap-4 sm:gap-8 p-8 shadow-2xl rounded-3xl items-center lg:items-end">
        <Image
          alt="product_image"
          src={"/images/".concat(product.imageName)}
          className="h-32 w-auto sm:h-40 lg:h-48"
          width={100}
          height={100}

        />
        <div className=" flex flex-col gap-2 items-center text-center sm:text-end sm:items-end">
          <h1 className="text-center sm:text-end text-sm sm:text-base font-bold ">
            {product.title}
          </h1>
          <h2 className="text-center sm:text-end text-xs sm:text-sm ">
            {product.subtitle}
          </h2>
          <p className="text-center sm:text-end text-xs sm:text-sm">
            {product.description}
          </p>
        </div>
        {product.isBrand && (
          <div className="absolute -top-6 left-0 h-fit w-full sm:w-fit px-4 bg-[#BE4242] rounded-3xl">
            <h2 className="text-sm text-white text-center text-ellipsis">
              Producto de nuestra marca{" "}
              <span className="text-base font-bold">Bitäl</span>
            </h2>
          </div>
        )}
      </div>
      <div className="flex-col h-fit ">
        <div className="rounded-3xl shadow-2xl p-4 sm:p-8">
          <h1 className="text-center sm:text-start text-sm sm:text-base font-bold text-[#3971C1]">
            Beneficios
          </h1>
          <div className="flex flex-wrap  justify-center mt-4">
            {product.benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center mx-4 my-2">
                <IconComponent iconName={benefit.icon} className="h-8 w-auto" style={{
                  color: benefit.iconColor
                }} />
                <h1 className="text-center text-xs sm:text-sm">
                  {benefit.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl shadow-2xl h-fit p-4 sm:p-8 mt-8">
          <h1 className="text-center sm:text-start text-base font-bold text-[#3971C1]">
            Presentaciones
          </h1>
          <div className="flex justify-between text-xs sm:text-sm text-center self-center mt-4 gap-4 sm:gap-8">
            <h1>Cantidad [gramos]</h1>
            <h1>Unidades por caja</h1>
            <h1>Cantidad de vasos [7oz]</h1>
          </div>
          <span className="h-1 w-2/3 block bg-[#3871C1] mt-3 mb-3 ml-auto mr-auto rounded-3xl"></span>
          <div className="flex flex-col gap-2 items px-8">
            {product.presentations.map((presentation, index) => (
              <div
                key={index}
                className="flex gap-2 justify-between text-xs sm:text-sm"
              >
                <h1>{presentation.quantity_grams} gr</h1>
                <h1>{presentation.units_box} u</h1>
                <h1>{presentation.quantity_glass} vasos</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
