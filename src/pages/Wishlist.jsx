import { useEffect } from "react";
import { WhishlistCard } from "../components/WistlistCard/WishlistCard";
import { useWishlist } from "../context/WishlistContext";

export const WishList = () => {
  const { wishlistState, getWishlist } = useWishlist();

  useEffect(() => {
    getWishlist();
  }, []);
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>Wishlist</h1>
      {wishlistState?.wishlistProduct?.map((wishlist) => (
        <WhishlistCard wishlist={wishlist} key={wishlist._id} />
      ))}
    </div>
  );
};
