import { useNavigate } from "react-router-dom";
import { cartReducer } from "../../Reducers/CartReducer";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import "./CartCard.css";
import ReactLoading from "react-loading";
import { useProduct } from "../../context/ProductContext";

export const CartCard = ({ cart }) => {
  const { increment, decrement, removeProduct, loadingQty, cartDispatch } =
    useCart();
  const { state } = useProduct();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const navigate = useNavigate();

  const moveToWishlist = (cart) => {
    const isPresentItem = wishlistState.wishlistProduct?.find(
      (wishlist) => wishlist._id === state.allProducts._id
    );
    if (!isPresentItem) {
      cartDispatch({ type: "REMOVE", payload: cart });
      wishlistDispatch({
        type: "ADD_WISHLIST_PRODUCT",
        payload: cart,
      });
    } else {
      navigate("/wishlist");
    }
  };

  return (
    <div>
      <div className="cartcard">
        <img src={cart.image} alt="cartimage" width="350px" />
        <div>
          <p>
            {cart?.name}-{cart?.brand}
          </p>
          <p>{cart?.price}</p>
          <p>{cart?.rating}</p>
          <div className="cartqty">
            <button onClick={() => increment(cart)}>+</button>{" "}
            {loadingQty ? (
              <ReactLoading
                type="spin"
                color="#0000FF"
                height={100}
                width={50}
              />
            ) : (
              <p>{cart?.qty}</p>
            )}
            <button onClick={() => decrement(cart)}>-</button>
          </div>
          <button onClick={() => moveToWishlist(cart)}>Move to wishlist</button>
          <button onClick={() => removeProduct(cart)}>Remove</button>
        </div>
      </div>

      {cart.length < 0 && (
        <>
          <button>Checkout</button>
        </>
      )}
    </div>
  );
};
