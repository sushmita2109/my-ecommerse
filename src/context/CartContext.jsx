import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { cartReducer } from "../Reducers/CartReducer";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { faL } from "@fortawesome/free-solid-svg-icons";

export const CartContext = createContext();

const initialState = {
  cartProduct: [],
};

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);
  const token = localStorage.getItem("Code");
  const [loadingQty, setLoadingQty] = useState(false);
  const { loggedIn } = useAuth();
  const navigate = useNavigate();

  const addItemToCartHandler = async (product) => {
    if (loggedIn) {
      const response = await fetch("/api/user/cart", {
        method: "POST",
        headers: {
          authorization: token,
        },
        body: JSON.stringify({ product }),
      }).then((res) => res.json());
      cartDispatch({ type: "ADD_CART_PRODUCT", payload: response.cart });

      toast.success("Item added to cart");
    } else {
      toast.error("Please Login ");
    }
  };

  const decrement = async (cart) => {
    setLoadingQty(true);
    try {
      const response = await fetch(`/api/user/cart/${cart._id}`, {
        method: "POST",
        headers: {
          authorization: token,
        },
        body: JSON.stringify({
          action: {
            type: "decrement",
          },
        }),
      });
      const data = await response.json();
      setLoadingQty(false);
      cartDispatch({ type: "DECREMENT", payload: data });
    } catch (e) {
      console.log(e);
    }
  };

  const increment = async (cart) => {
    setLoadingQty(true);
    try {
      const data = await fetch(`/api/user/cart/${cart._id}`, {
        method: "POST",
        headers: {
          authorization: token,
        },
        body: JSON.stringify({
          action: {
            type: "increment",
          },
        }),
      });
      const response = await data.json();
      setLoadingQty(false);
      cartDispatch({ type: "INCREMENT", payload: response });
    } catch (e) {
      console.log(e);
    }
  };

  const removeProduct = async (cart) => {
    try {
      const response = await fetch(`/api/user/cart/${cart._id}`, {
        method: "DELETE",
        headers: {
          authorization: token,
        },
      });
      const res = await response.json();
      cartDispatch({ type: "REMOVE", payload: res });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartState,
        cartDispatch,
        addItemToCartHandler,
        decrement,
        increment,
        removeProduct,
        loadingQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
