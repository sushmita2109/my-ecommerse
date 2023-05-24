import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Black Solid Softride Pro Coast Training Shoes",
    brand: "Puma",
    price: "Rs. 5199",
    size: [3, 4, 5, 6],
    rating: 4.5,
    image:
      "https://rukminim1.flixcart.com/image/832/832/l4d2ljk0/shoe/j/p/5/-original-imagf9vhhsmzfjxp.jpeg?q=70",
    categoryName: "Women Sneakers",
  },
  {
    _id: uuid(),
    name: "Boys Striped LED Slip-On Sneakers",
    brand: "Skechers",
    price: "Rs. 4199",
    size: [6, 7, 8, 10],
    rating: 3.5,
    image:
      "https://rukminim1.flixcart.com/image/832/832/kq5iykw0/shoe/s/n/4/6-232211-7-skechers-nvy-original-imag48gdatsnvz99.jpeg?q=70",
    categoryName: "Men Sneakers",
  },
  {
    _id: uuid(),
    name: "Hustle V2 Wns Running Shoes For Women",
    brand: "Puma",
    price: "Rs. 1400",
    size: [3, 4, 5, 6],
    rating: 2.5,
    image:
      "https://rukminim1.flixcart.com/image/832/832/l4rd0280/shoe/m/a/q/-original-imagfh7qzmjjcftj.jpeg?q=70",
    categoryName: "Women Sneakers",
  },
  {
    _id: uuid(),
    name: "Men Lite Pro Clear Rush Sneakers",
    brand: "Skechers",
    price: "Rs. 4399",
    size: [7, 8, 9, 10],
    rating: 3,
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/n/v/z/-original-imagkjqmqdjymyg8.jpeg?q=70",
    categoryName: "Men Sneakers",
  },
];
