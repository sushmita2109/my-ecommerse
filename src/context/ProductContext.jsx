import { createContext, useContext, useReducer } from "react";
import { reducer } from "./Reducer";
export const ProductContext = createContext();

const initialState = {
  allProducts: [],
  categoryData: [],
  filteredProduct: [],
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const brandedProduct = (PBrand) => {};

  return (
    <ProductContext.Provider
      value={{
        state,
        dispatch,

        brandedProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
