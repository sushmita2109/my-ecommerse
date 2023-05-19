import { createContext, useContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  return <ProductContext.Provider>{children}</ProductContext.Provider>;
};

export const useProduct = () => useContext(ProductContext);
