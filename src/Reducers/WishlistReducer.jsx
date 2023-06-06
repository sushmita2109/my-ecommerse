export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_WISHLIST_PRODUCT": {
      const newState = [...action.payload];
      return {
        ...state,
        wishlistProduct: newState,
      };
    }
    case "REMOVE_WISHLIST": {
      const newState = [...action.payload];
      return {
        ...state,
        wishlistProduct: newState,
      };
    }
    case "FETCH_WISHLIST": {
      return {
        ...state,
        wishlistProduct: action.payload,
      };
    }
    case "CLEAR_WISHLIST":
      return { ...state, wishlist: action.payload };

    default: {
      return state;
    }
  }
};
