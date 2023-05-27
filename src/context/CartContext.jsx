import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../Reducers/CartReducer";

export const CartContext = createContext();

const initialState = {
  cartProduct: [],
};

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
