export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA": {
      return {
        ...state,
        allProducts: action.data,
        filteredProduct: action.data,
      };
    }
    case "CATEGORY_DATA": {
      return {
        ...state,
        categoryData: action.data,
      };
    }
    case "Category_Products": {
      return {
        ...state,
        filteredProduct: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
