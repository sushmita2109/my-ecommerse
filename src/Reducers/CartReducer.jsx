export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART_PRODUCT": {
      return {
        ...state,
        cartProduct: action.payload,
      };
    }
    default:
      return state;
  }
};
