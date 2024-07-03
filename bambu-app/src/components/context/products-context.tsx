import React, { createContext, useContext, useReducer } from 'react';

const ProductContext = createContext({} as any);

const initialState = {
  selectedCategory: 2,
  searchQuery: '',
  sortMode: 'default', // puede ser 'default', 'price-asc', 'price-desc', etc.
  products: [],
};

function productReducer(state:{}, action:any) {
  switch (action.type) {
    case 'SET_CATEGORY':
      return { ...state, selectedCategory: action.payload };
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    case 'SET_SORT_MODE':
      return { ...state, sortMode: action.payload };
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    default:
      return state;
  }
}

export const ProductProvider = ({ children }: {children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
