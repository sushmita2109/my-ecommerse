import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import "./WishlistCard.css";
import { toast } from "react-toastify";

export const WhishlistCard = ({ wishlist }) => {
  const { removeProduct, wishlistDispatch, wishlistState } = useWishlist();
  const { cartDispatch } = useCart();
  const navigate = useNavigate();
  const token = localStorage.getItem("Code");

  const moveProductToCart = async (product) => {
    /* const ispresent = wishlistState.wishlistProduct.find(
      (wishlist) => wishlist._id === product._id
    ); */
    try {
      const response = await fetch(`/api/user/wishlist/${wishlist._id}`, {
        method: "DELETE",
        headers: {
          authorization: token,
        },
      });
      const data = await response.json();
      wishlistDispatch({ type: "REMOVE_WISHLIST", payload: data.wishlist });
    } catch (e) {
      console.log(e);
    }
    try {
      const response = await fetch("/api/user/cart", {
        method: "POST",
        headers: {
          authorization: token,
        },
        body: JSON.stringify({ product }),
      }).then((res) => res.json());
      cartDispatch({ type: "ADD_CART_PRODUCT", payload: response.cart });

      toast.success("Item added to cart");
    } catch (e) {
      console.log(e);
    }
  };
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
          <button onClick={() => moveProductToCart(wishlist)}>
            Move to Cart
          </button>
          <button onClick={() => removeProduct(wishlist)}>Remove</button>
        </div>
      </div>
    </>
  );
};
