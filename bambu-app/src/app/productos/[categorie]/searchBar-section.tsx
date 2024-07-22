import { useProductContext } from "@/components/context/products-context";
import IconComponent from "@/components/IconComponent";

export const SearchBar = () => {
  const { state, dispatch } = useProductContext();

  const handleSearchChange = (e: any) => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: e.target.value });
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      dispatch({ type: "SET_SEARCH_QUERY", payload: state.searchQuery.trim() });
    }
  };

  const handleCleanSearch = (e: any) => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: "" });
  };

  return (
    
    <div className="flex items-center justify-between w-full border-gray-300 border-solid border-2 rounded-3xl px-4 py-2 gap-4" id="search">
      <div className="flex h-full w-full justify-start items-center gap-4">
        <IconComponent
          iconName="icon_search"
          className="h-6 sm:h-8 w-auto text-gray-300 "
          onClick={handleSearchChange}
        />
        <input
          type="text"
          placeholder="Buscar productos"
          className=" w-full text-sm border-none focus:outline-none bg-transparent"
          value={state.searchQuery}
          onChange={handleSearchChange}
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) => (e.target.placeholder = "Buscar productos")}
          onKeyDown={handleKeyPress}
        />
      </div>
      <IconComponent
        iconName="icon_close"
        className="h-6 sm:h-8 w-auto "
        style={{
          opacity: state.searchQuery.trim().length !== 0 ? 1 : 0.5,
          color: "black",
          cursor: state.searchQuery.trim().length !== 0 ? "pointer" : "not-allowed",
        }}

        onClick={handleCleanSearch}
      />
    </div>
  );
};
