"use client"
import { useRef } from "react";
import { ProductCard } from "./product-card";
import { Product } from "../../components/model/types";
import { useProducts } from "@/components/hooks/useProducts";
import { Pagination } from "./pagination";

export const ProductsList = () => {
  const {
    products,
    currentPage,
    setCurrentPage,
    totalProducts,
    productsPerPage,
  } = useProducts();

  const categoriesRef = useRef<HTMLDivElement>(null);

  const formatTitleProducts = () => {
    return totalProducts === 1
      ? "1 producto encontrado"
      : `${totalProducts} productos encontrados`;
  };

  return (
    <div >
      <div className="flex gap-8 py-4 items-center" >
        <h1 className="text-center text-sm sm:text-base font-bold text-[#496623] ">
          {formatTitleProducts()}
        </h1>
        <span className="w-full h-1 bg-[#496623] rounded-3xl block mt-2 opacity-20" />
      </div>
      <div ref={categoriesRef}>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalProducts={totalProducts}
          productsPerPage={productsPerPage}
          scrollTargetRef={categoriesRef}
        />
        <div className="flex flex-col py-4 gap-8 items-center">
          {products.map((product: Product, index: number) => (
            <div key={index}>
              {index !== 0 && (
                <span className="w-2/3 h-1 mx-auto bg-[#496623] rounded-3xl block mb-8 opacity-20" />
              )}
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        {totalProducts !== 0 && (
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalProducts={totalProducts}
            productsPerPage={productsPerPage}
            scrollTargetRef={categoriesRef}
          />
        )}
      </div>
    </div>
  );
};
