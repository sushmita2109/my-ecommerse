import { createContext, useContext, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const getData = async () => {
    try {
      const res = await fetch("/api/products");
      console.log(await res.json());
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <ProductContext.Provider value={{ getData }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
