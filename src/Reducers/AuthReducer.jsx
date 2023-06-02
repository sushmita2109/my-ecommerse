export const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOCATION": {
      return {
        ...state,
        location: action.payload ?? "/",
      };
    }
    case "SET_EMAIL": {
      return {
        ...state,
        email: action.payload,
      };
    }
    case "SET_PASSWORD": {
      return {
        ...state,
        password: action.payload,
      };
    }
    case "SET_FIRSTNAME":
      return { ...state, firstName: action.payload };
    case "SET_LASTNAME":
      return { ...state, lastName: action.payload };

    default:
      return state;
  }
};
