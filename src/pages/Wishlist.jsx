import { useEffect } from "react";
import { WhishlistCard } from "../components/WistlistCard/WishlistCard";
import { useWishlist } from "../context/WishlistContext";

export const WishList = () => {
  const { wishlistState, getWishlist } = useWishlist();
  console.log(
    "🚀 ~ file: Wishlist.jsx:6 ~ WishList ~ wishlistState:",
    wishlistState
  );
  useEffect(() => {
    getWishlist();
  }, []);
  return (
    <>
      {wishlistState?.wishlistProduct?.map((wishlist) => (
        <WhishlistCard wishlist={wishlist} key={wishlist._id} />
      ))}
    </>
  );
};
