export const cartReducer = (state, action) => {
  console.log("🚀 ~ file: CartReducer.jsx:2 ~ cartReducer ~ action:", action);

  switch (action.type) {
    case "ADD_CART_PRODUCT": {
      const newState = [...action.payload];
      return {
        ...state,
        cartProduct: newState,
      };
    }
    case "REMOVE": {
      const newState = [...action.payload];
      return {
        ...state,
        cartProduct: newState,
      };
    }
    case "INCREMENT": {
      const newState = [...action.payload];
      return {
        ...state,
        cartProduct: newState,
      };
    }
    case "DECREMENT": {
      const newState = [...action.payload];
      return {
        ...state,
        cartProduct: newState,
      };
    }
    default:
      return state;
  }
};
