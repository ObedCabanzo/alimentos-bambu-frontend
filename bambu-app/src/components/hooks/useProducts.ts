import { useEffect, useState } from "react";
import { useProductContext } from "@/components/context/products-context";
import { Product } from "@/components/model/types";
import ProductsData from "@/config/data_products"
import { usePathname } from "next/navigation";


export const useProducts = () => {
  const { state, dispatch } = useProductContext();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;
  const pathname = usePathname();

  useEffect(() => {
    const fetchProducts = async () => {
      
      let products = ProductsData as Product[];
      // Filtrar por categoría
      if (state.searchQuery) {
        products = products.filter((product: Product) =>
          product.title.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
      }
      else if (state.selectedCategory !== null) {
        setCurrentPage(1);
        products = products.filter((product: Product) =>
          product.categories.includes(pathname.split("/").pop()!)
        );
      }

      // Ordenar productos
      // Aquí puedes agregar lógica para ordenar los productos si es necesario

      // Actualizar estado con los productos filtrados
      dispatch({ type: "SET_PRODUCTS", payload: products });
    };

    fetchProducts();
  }, [state.selectedCategory, state.searchQuery, state.sortMode, dispatch, pathname]);

  const paginatedProducts = state.products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return {
    products: paginatedProducts,
    currentPage,
    setCurrentPage,
    totalProducts: state.products.length,
    productsPerPage,
  };
};
