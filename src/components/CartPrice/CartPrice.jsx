import { useCart } from "../../context/CartContext";

export const CartPrice = () => {
  const { totalPrice, totalDiscountedPrice, deliveryCharge } = useCart();
  const totalAmount = totalPrice + deliveryCharge;
  return (
    <div>
      <h1>Card Price</h1>
      <hr />
      <p>Price {totalPrice}</p>
      <p>Discount {totalDiscountedPrice}</p>
      <p>Delivery Charge {deliveryCharge}</p>
      <hr />
      <h4>Total Amount {totalAmount}</h4>
      <hr />
      <p>You have save ${totalDiscountedPrice} on this order</p>
      <button>Chekout</button>
    </div>
  );
};
