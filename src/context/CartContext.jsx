import { createContext, useContext, useReducer, useState } from "react";
import { cartReducer } from "../Reducers/CartReducer";
import { useAuth } from "./AuthContext";

import { toast } from "react-toastify";

export const CartContext = createContext();

const initialState = {
  cartProduct: [],
};

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);
  const token = localStorage.getItem("Code");
  const [loadingQty, setLoadingQty] = useState(false);
  const { loggedIn } = useAuth();

  const addItemToCartHandler = async (product) => {
    const isItemAlreadyPresent = cartState.cartProduct.findIndex(
      (item) => item._id === product._id
    );
    if (loggedIn && isItemAlreadyPresent === -1) {
      try {
        const response = await fetch("/api/user/cart", {
          method: "POST",
          headers: {
            authorization: token,
          },
          body: JSON.stringify({ product }),
        }).then((res) => res.json());
        cartDispatch({ type: "ADD_CART_PRODUCT", payload: response.cart });

        toast.success(`${product.name} added to cart`);
      } catch (e) {
        console.log(e);
      }
    } else {
      if (loggedIn === false) {
        toast.error("Please Login");
      } else {
        increment(product);
        toast.success(`${product.name} quantity is increased`);
      }
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
      cartDispatch({ type: "DECREMENT", payload: data.cart });
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
      cartDispatch({ type: "INCREMENT", payload: response.cart });
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
      cartDispatch({ type: "REMOVE", payload: res.cart });

      toast.warning(`${cart.name} removed from cart`);
    } catch (e) {
      console.log(e);
    }
  };

  const totalPrice = cartState.cartProduct.reduce(
    (total, { isDiscount, price, discountedPrice, qty }) =>
      isDiscount ? total + discountedPrice * qty : total + price * qty,
    0
  );

  const totalDiscountedPrice = cartState.cartProduct.reduce(
    (acc, { discountedPrice, qty, price, isDiscount }) =>
      isDiscount ? acc + (price - discountedPrice) * qty : 0,
    0
  );

  const deliveryCharge = cartState.cartProduct.length >= 3 ? 0 : 100;

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
        totalPrice,
        totalDiscountedPrice,
        deliveryCharge,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
