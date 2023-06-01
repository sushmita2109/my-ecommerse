export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_WISHLIST_PRODUCT": {
      return {
        ...state,
        wishlistProduct: action.payload,
      };
    }
    case "REMOVE_WISHLIST": {
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
