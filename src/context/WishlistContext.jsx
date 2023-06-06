import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../Reducers/WishlistReducer";
import { toast } from "react-toastify";
import { useAuth } from "./AuthContext";

export const WishlistContext = createContext();

const initialState = {
  wishlistProduct: [],
};

export const WishlistProvider = ({ children }) => {
  const token = localStorage.getItem("Code");
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialState
  );
  const { loggedIn } = useAuth();

  const getWishlist = async () => {
    try {
      const response = await fetch("/api/user/wishlist", {
        method: "GET",
        headers: {
          authorization: token,
        },
      });
      const data = await response.json();

      wishlistDispatch({
        type: "ADD_WISHLIST_PRODUCT",
        payload: data.wishlist,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const addToWishlist = async (product) => {
    if (loggedIn) {
      const response = await fetch("/api/user/wishlist", {
        method: "POST",
        headers: {
          authorization: token,
        },
        body: JSON.stringify({ product }),
      });
      const data = await response.json();

      wishlistDispatch({
        type: "ADD_WISHLIST_PRODUCT",
        payload: data.wishlist,
      });
      toast.success(`${product.name} added to wishlist`);
    } else {
      toast.error("Please Login");
    }
  };

  const removeProduct = async (wishlist) => {
    try {
      const response = await fetch(`/api/user/wishlist/${wishlist._id}`, {
        method: "DELETE",
        headers: {
          authorization: token,
        },
      });
      const data = await response.json();
      toast.warning(`${wishlist.name} removed from wishlist`);
      wishlistDispatch({ type: "REMOVE_WISHLIST", payload: data.wishlist });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistDispatch,
        wishlistState,
        addToWishlist,
        removeProduct,
        getWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
