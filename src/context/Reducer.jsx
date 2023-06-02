export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA": {
      return {
        ...state,
        allProducts: action.data,
      };
    }
    case "CATEGORY_DATA": {
      return {
        ...state,
        categoryData: action.data,
      };
    }
    case "SEARCH_VALUE":
      return { ...state, searchValue: action.payload };
    case "CLEAR_FILTERS":
      return {
        ...state,
        searchValue: "",
        sortMethod: "",
        selectedCategory: [],
        ratingValue: "",
        priceRange: "",
      };
    case "PRICE_RANGE":
      return { ...state, priceRange: action.payload };
    case "CATEGORIES": {
      let newCategory = [...state.selectedCategory];
      const selectedCategory = action.payload;

      const categoryFound = newCategory.find(
        (category) => category === selectedCategory
      );

      if (!categoryFound) {
        newCategory.push(selectedCategory);
      } else {
        newCategory = newCategory.filter(
          (category) => category !== selectedCategory
        );
      }

      return { ...state, selectedCategory: newCategory };
    }
    case "RATING":
      return { ...state, ratingValue: action.payload };
    case "SORT_BY_PRICE":
      return { ...state, sortMethod: action.payload };
    case "SET_USER_DATA":
      return { ...state, user: action.payload };
    default: {
      return state;
    }
  }
};
