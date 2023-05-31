import { useCart } from "../../context/CartContext";
import "./CartCard.css";
import ReactLoading from "react-loading";

export const CartCard = ({ cart }) => {
  const { increment, decrement, removeProduct, loadingQty } = useCart();
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
          <button>Move to wishlist</button>
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
