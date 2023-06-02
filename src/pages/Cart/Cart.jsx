import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { CartCard } from "../../components/CartCard/CartCard";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import "./Cart.css";
import { CartPrice } from "../../components/CartPrice/CartPrice";

export const Cart = () => {
  const { loggedIn } = useAuth();
  const { cartState } = useCart();

  return (
    <div className="cart">
      <h1>Cart</h1>
      {cartState.cartProduct.length > 0 && (
        <div className="cardcomps">
          {loggedIn && (
            <List>
              {cartState.cartProduct?.map((cart) => (
                <ListItem>
                  <CartCard key={cart._id} cart={cart} />
                </ListItem>
              ))}
            </List>
          )}
          <CartPrice />
        </div>
      )}
    </div>
  );
};
