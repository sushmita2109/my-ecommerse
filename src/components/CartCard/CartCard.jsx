import "./CartCard.css";

export const CartCard = ({ cart }) => {
  return (
    <div>
      <div className="cartcard">
        <img src={cart.image} alt="cartimage" width="350px" />
        <div>
          <p>
            {cart.name}-{cart.brand}
          </p>
          <p>{cart.price}</p>
          <p>{cart.rating}</p>
          <button>Move to wishlist</button>
          <button>Remove</button>
        </div>
      </div>

      {cart.length > 0 && (
        <>
          <button>Checkout</button>
        </>
      )}
    </div>
  );
};
