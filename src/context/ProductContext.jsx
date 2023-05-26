import { createContext, useContext, useReducer, useState } from "react";
import { reducer } from "./Reducer";
export const ProductContext = createContext();

const initialState = {
  allProducts: [],
  categoryData: [],
  selectedCategory: [],
  categories: [],
  searchValue: "",
  sortMethod: "",
  ratingValue: "",
  priceRange: "",
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const applyFilters = (products) => {
    let filteredData = [...products];
    const searchValue = state.searchValue.trim().toLowerCase();
    const selectedCategory = state.selectedCategory;
    const sortMethod = state.sortMethod;
    const ratingValue = state.ratingValue;
    const priceRange = state.priceRange;

    if (searchValue.length > 0) {
      filteredData = filteredData.filter(({ name }) =>
        name.toLowerCase().includes(searchValue)
      );
    }

    if (priceRange) {
      filteredData = filteredData.filter(
        ({ discountedPrice }) => discountedPrice >= Number(priceRange)
      );
    }

    if (selectedCategory.length > 0) {
      const selectedCategory = state.selectedCategory;

      filteredData = filteredData.filter(({ categoryName }) =>
        selectedCategory.includes(categoryName)
      );
    }

    if (ratingValue) {
      filteredData = filteredData.filter(({ rating }) => rating >= ratingValue);
    }

    if (sortMethod) {
      sortMethod === "ascending"
        ? filteredData.sort((a, b) => a.price - b.price)
        : filteredData.sort((a, b) => b.price - a.price);
    }

    return filteredData;
  };

  const filteredProducts = applyFilters(state.allProducts);

  return (
    <ProductContext.Provider
      value={{
        state,
        dispatch,
        filteredProducts,
        sortMethod: state.sortMethod,
        ratingValue: state.ratingValue,
        priceRange: state.priceRange,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
