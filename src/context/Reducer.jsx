export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA": {
      return {
        ...state,
        allProducts: action.data,
      };
    }
    default: {
      return state;
    }
  }
};
