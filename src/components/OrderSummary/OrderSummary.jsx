import { useCart } from "../../context/CartContext";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import "./OrderSummary.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useProduct } from "../../context/ProductContext";

export const OrderSummary = () => {
  const {
    totalPrice,
    totalDiscountedPrice,
    deliveryCharge,
    cartState,
    cartDispatch,
  } = useCart();
  const { selectedAddress } = useProduct();
  const { name, houseNo, city, state, country, zip } = selectedAddress ?? {};
  const totalAmount = totalPrice + deliveryCharge;
  const navigate = useNavigate();

  const placeOrder = () => {
    toast.success("Order Placed");
    cartDispatch({ type: "CLEAR_CART", payload: [] });
    navigate("/");
  };
  return (
    <div>
      {
        <Card className="cart-price-container">
          <h1>Cart Items</h1>
          {cartState.cartProduct?.map((product) => (
            <p>{product.name}</p>
          ))}
          <hr />
          <h1>Cart Price</h1>
          <div className="cart-price">
            <hr />
            <div className="orderprices">
              Price <span>{totalPrice}</span>
            </div>
            <div className="orderprices">
              Discount <span> {totalDiscountedPrice}</span>
            </div>
            <div className="orderprices">
              Delivery Charge <span>{deliveryCharge}</span>
            </div>
            <hr />
            <h4 className="orderprices">
              Total Amount <span>{totalAmount}</span>
            </h4>
            <hr />
            <h1>Deliver To</h1>
            <hr />
            {selectedAddress ? (
              <p>{`${name}, ${houseNo}, ${city}, ${state}, ${country}, ${zip}`}</p>
            ) : (
              <p>Please select an address</p>
            )}
            <Button onClick={() => placeOrder()}>Place Order</Button>
          </div>
        </Card>
      }
    </div>
  );
};
