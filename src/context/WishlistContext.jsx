import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../Reducers/WishlistReducer";

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
  const getWishlist = async () => {
    try {
      const response = await fetch("/api/user/wishlist", {
        method: "GET",
        headers: {
          authorization: token,
        },
      });
      const data = await response.json();
      console.log(
        "🚀 ~ file: WishlistContext.jsx:25 ~ getWishlist ~ data:",
        data
      );
      wishlistDispatch({
        type: "ADD_WISHLIST_PRODUCT",
        payload: data.wishlist,
      });
    } catch (error) {
      console.log(
        "🚀 ~ file: WishlistContext.jsx:30 ~ getWishlist ~ error:",
        error
      );
    }
  };
  const addToWishlist = async (product) => {
    try {
      const response = await fetch("/api/user/wishlist", {
        method: "POST",
        headers: {
          authorization: token,
        },
        body: JSON.stringify({ product }),
      });
      const data = await response.json();
      console.log(
        "🚀 ~ file: WishlistContext.jsx:26 ~ addToWishlist ~ data: ",
        data
      );

      wishlistDispatch({
        type: "ADD_WISHLIST_PRODUCT",
        payload: data.wishlist,
      });
    } catch (e) {
      console.log(e);
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
      console.log(
        "🚀 ~ file: WishlistContext.jsx:49 ~ removeProduct ~ data:",
        data
      );

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
