import { useState } from "react";
import IconComponent from "@/components/IconComponent";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalProducts: number;
  productsPerPage: number;
  scrollTargetRef: React.RefObject<HTMLDivElement>;
}

export const Pagination = ({
  currentPage,
  setCurrentPage,
  totalProducts,
  productsPerPage,
  scrollTargetRef,
}: PaginationProps) => {
  const [showPageList, setShowPageList] = useState(false);

  const scrollToTop = () => {
    if (scrollTargetRef.current) {
      scrollTargetRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(totalProducts / productsPerPage)) {
      setCurrentPage(currentPage + 1);
      setShowPageList(false);
      scrollToTop();
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setShowPageList(false);

      scrollToTop();
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    setShowPageList(false);
    scrollToTop();
  };

  const handleShowPageList = () => {
    setShowPageList(!showPageList);
  };

  return (
    <div className="flex justify-center sm:justify-between items-center py-4">
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className="text-[#496623] py-2 px-4 rounded disabled:opacity-0 font-bold text-xs sm:text-sm hidden sm:block"
      >
        <p style={{ textDecoration: "underline" }}>Anterior</p>
      </button>
      <div className="flex gap-2 text-xs sm:text-sm ">
        <p>Pagina</p>
        <div className="flex flex-col items-center relative text-xs sm:text-sm ">
          <div
            className="flex gap-4 border-solid border-[#496623] border-2 px-2 items-center cursor-pointer"
            onClick={handleShowPageList}
          >
            <p>{currentPage}</p>
            <IconComponent
              iconName="icon_go_next"
              className="h-4 w-auto text-[#496623] rotate-90 text-xs sm:text-sm"
            />
          </div>
          {showPageList && totalProducts !== 0 && (
            <div className="absolute top-full mt-2 bg-white border-solid border-[#496623] border-2 gap-4 p-2 z-10 overflow-y-auto max-h-28 overflow-x-hidden">
              {[...Array(Math.ceil(totalProducts / productsPerPage))].map(
                (_, index) => (
                  <div
                    key={index}
                    onClick={() => handlePageClick(index + 1)}
                    className="cursor-pointer hover:bg-gray-200 px-2 text-center text-xs sm:text-sm"
                    style={{
                      backgroundColor:
                        currentPage === index + 1 ? "#496623" : "white",
                      color: currentPage === index + 1 ? "white" : "#496623",
                      opacity: currentPage === index + 1 ? 0.5 : 1,
                    }}
                  >
                    <p>{index + 1}</p>
                  </div>
                )
              )}
            </div>
          )}
        </div>
        <p>de {Math.ceil(totalProducts / productsPerPage)}</p>
      </div>
      <button
        onClick={handleNextPage}
        disabled={
          currentPage === Math.ceil(totalProducts / productsPerPage) ||
          totalProducts === 0
        }
        className="text-[#496623] py-2 px-4 rounded font-bold disabled:opacity-0 text-xs sm:text-sm hidden sm:block"
        style={{ textDecoration: "underline" }}
      >
        Siguiente
      </button>
    </div>
  );
};
