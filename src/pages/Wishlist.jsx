import { WhishlistCard } from "../components/WistlistCard/WishlistCard";
import { useWishlist } from "../context/WishlistContext";

export const WishList = () => {
  const { wishlistState } = useWishlist();
  return (
    <>
      {wishlistState?.wishlistProduct?.map((wishlist) => (
        <WhishlistCard wishlist={wishlist} key={wishlist._id} />
      ))}
    </>
  );
};
