import { AddressCard } from "../../components/AddressCard/AddressCard";
import { OrderSummary } from "../../components/OrderSummary/OrderSummary";
import "./Checkout.css";

export const Checkout = () => {
  return (
    <div className="checkout">
      <AddressCard />
      <OrderSummary />
    </div>
  );
};
