export const reducer = (state, action) => {
  console.log("🚀 ~ file: Reducer.jsx:2 ~ reducer ~ action:", action);
  console.log("🚀 ~ file: Reducer.jsx:2 ~ reducer ~ state:", state);
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
