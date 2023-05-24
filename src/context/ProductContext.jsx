import { createContext, useContext, useReducer } from "react";
import { reducer } from "./Reducer";
export const ProductContext = createContext();

const initialState = {
  allProducts: [],
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
