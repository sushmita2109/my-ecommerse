import { WhishlistCard } from "../components/WistlistCard/WishlistCard";
import { useWishlist } from "../context/WishlistContext";

export const WishList = () => {
  const { wishlistState } = useWishlist();
  return (
    <div>
      <h1>Wishlish</h1>
      {wishlistState.wishlistProduct?.map((wishlist) => (
        <WhishlistCard wishlist={wishlist} key={wishlist._id} />
      ))}
    </div>
  );
};
