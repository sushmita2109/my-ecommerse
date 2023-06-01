export const wishlistReducer = (state, action) => {
  console.log(
    "🚀 ~ file: WishlistReducer.jsx:2 ~ wishlistReducer ~ action:",
    action
  );

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
    default: {
      return state;
    }
  }
};
