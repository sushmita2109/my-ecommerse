import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { CartCard } from "../CartCard/CartCard";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import "./Cart.css";

export const Cart = () => {
  const { loggedIn } = useAuth();
  const { cartState } = useCart();
  console.log(cartState);
  return (
    <div className="cart">
      <h1>Cart</h1>
      {loggedIn && (
        <List>
          {cartState.cartProduct?.map((cart) => (
            <ListItem>
              <CartCard key={cart._id} cart={cart} />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};
