import { useCart } from "../../context/CartContext";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

export const CartPrice = () => {
  const { totalPrice, totalDiscountedPrice, deliveryCharge } = useCart();
  const totalAmount = totalPrice + deliveryCharge;
  return (
    <div>
      <Card className="cart-price-container">
        <h1>Cart Price</h1>
        <div className="cart-price">
          <hr />
          <div>Price {totalPrice}</div>
          <div>Discount {totalDiscountedPrice}</div>
          <div>Delivery Charge {deliveryCharge}</div>
          <hr />
          <h4>Total Amount {totalAmount}</h4>
          <hr />
          <p>You have save ${totalDiscountedPrice} on this order</p>
          <Button>Chekout</Button>
        </div>
      </Card>
    </div>
  );
};
