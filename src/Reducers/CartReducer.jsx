export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART_PRODUCT": {
      return {
        ...state,
        cartProduct: action.payload,
      };
    }
    case "REMOVE": {
      return {
        ...state,
        cartProduct: action.payload.cart,
      };
    }
    case "INCREMENT": {
      return {
        ...state,
        cartProduct: action.payload.cart,
      };
    }
    case "DECREMENT": {
      return {
        ...state,
        cartProduct: action.payload.cart,
      };
    }
    default:
      return state;
  }
};
