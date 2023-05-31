import { useWishlist } from "../../context/WishlistContext";
import "./WishlistCard.css";

export const WhishlistCard = ({ wishlist }) => {
  const { removeProduct } = useWishlist();
  return (
    <>
      <div className="wishlistcard">
        <img src={wishlist.image} alt="cartimage" width="350px" />
        <div>
          <p>
            {wishlist?.name}-{wishlist?.brand}
          </p>
          <p>{wishlist?.price}</p>
          <p>{wishlist?.rating}</p>
          <button>Move to Cart</button>
          <button onClick={() => removeProduct(wishlist)}>Remove</button>
        </div>
      </div>
    </>
  );
};
