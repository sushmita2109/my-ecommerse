import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { CartCard } from "../CartCard/CartCard";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import "./Cart.css";
/**
 * 
 * @returns {
    "cart": [
        {
            "_id": "d219e5b9-cdd6-4129-aa74-c1a90217af96",
            "name": "Black Solid Softride Pro Coast Training Shoes",
            "brand": "Puma",
            "price": "5199",
            "size": [
                3,
                4,
                5,
                6
            ],
            "rating": 4.5,
            "image": "https://rukminim1.flixcart.com/image/832/832/l4d2ljk0/shoe/j/p/5/-original-imagf9vhhsmzfjxp.jpeg?q=70",
            "categoryName": "Women Sneakers",
            "id": "1",
            "createdAt": "2023-05-28T18:56:34+05:30",
            "updatedAt": "2023-05-28T18:56:34+05:30",
            "qty": 1
        },
        {
            "_id": "d219e5b9-cdd6-4129-aa74-c1a90217af96",
            "name": "Black Solid Softride Pro Coast Training Shoes",
            "brand": "Puma",
            "price": "5199",
            "size": [
                3,
                4,
                5,
                6
            ],
            "rating": 4.5,
            "image": "https://rukminim1.flixcart.com/image/832/832/l4d2ljk0/shoe/j/p/5/-original-imagf9vhhsmzfjxp.jpeg?q=70",
            "categoryName": "Women Sneakers",
            "id": "1",
            "createdAt": "2023-05-28T18:56:57+05:30",
            "updatedAt": "2023-05-28T18:56:57+05:30",
            "qty": 1
        }
    ]
}
 */
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
