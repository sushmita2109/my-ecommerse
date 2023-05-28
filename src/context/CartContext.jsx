import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "../Reducers/CartReducer";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const CartContext = createContext();

const initialState = {
  cartProduct: [],
};

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);
  const token = localStorage.getItem("Code");
  const { loggedIn } = useAuth();
  const navigate = useNavigate();

  const addItemToCartHandler = async (product) => {
    const response = await fetch("/api/user/cart", {
      method: "POST",
      headers: {
        authorization: token,
      },
      body: JSON.stringify({ product }),
    }).then((res) => res.json());
    cartDispatch({ type: "ADD_CART_PRODUCT", payload: response.cart });
    toast.success("Item added to cart");
  };

  return (
    <CartContext.Provider
      value={{ cartState, cartDispatch, addItemToCartHandler }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
