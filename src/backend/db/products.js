import { faL } from "@fortawesome/free-solid-svg-icons";
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
    price: "5199",
    size: [3, 4, 5, 6],
    rating: 4.5,
    image:
      "https://rukminim1.flixcart.com/image/832/832/l4d2ljk0/shoe/j/p/5/-original-imagf9vhhsmzfjxp.jpeg?q=70",
    categoryName: "Women Sneakers",
    isDiscount: true,
    discountedPrice: "4999",
    isBestSeller: true,
    inStock: false,
  },
  {
    _id: uuid(),
    name: "Boys Striped LED Slip-On Sneakers",
    brand: "Skechers",
    price: "4199",
    size: [6, 7, 8, 10],
    rating: 3.5,
    image:
      "https://rukminim1.flixcart.com/image/832/832/kq5iykw0/shoe/s/n/4/6-232211-7-skechers-nvy-original-imag48gdatsnvz99.jpeg?q=70",
    categoryName: "Men Sneakers",
    isDiscount: false,
    discountedPrice: "",
    isBestSeller: false,
    inStock: true,
  },
  {
    _id: uuid(),
    name: "Hustle V2 Wns Running Shoes For Women",
    brand: "Puma",
    price: "1400",
    size: [3, 4, 5, 6],
    rating: 2.5,
    image:
      "https://rukminim1.flixcart.com/image/832/832/l4rd0280/shoe/m/a/q/-original-imagfh7qzmjjcftj.jpeg?q=70",
    categoryName: "Women Sneakers",
    isDiscount: true,
    discountedPrice: "1399",
    isBestSeller: true,
    inStock: false,
  },
  {
    _id: uuid(),
    name: "Men Lite Pro Clear Rush Sneakers",
    brand: "Skechers",
    price: "4399",
    size: [7, 8, 9, 10],
    rating: 3,
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/n/v/z/-original-imagkjqmqdjymyg8.jpeg?q=70",
    categoryName: "Men Sneakers",
    isDiscount: true,
    discountedPrice: "3999",
    isBestSeller: true,
    inStock: true,
  },
  {
    _id: uuid(),
    name: "RayRun M Running Shoes For Men",
    brand: "Addidas",
    price: "2199",
    size: [7, 8, 9, 10],
    rating: 3.2,
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/x/9/e/11-gc0908-11-adidas-cblack-stone-cougrn-original-imagzypzvkeevhun.jpeg?q=70",
    categoryName: "Men Sneakers",
    isDiscount: true,
    discountedPrice: "2099",
    isBestSeller: false,
    inStock: false,
  },
  {
    _id: uuid(),
    name: "GlideEase W Running Shoes For Women ",
    brand: "Addidas",
    price: "1769",
    size: [7, 8, 9, 10],
    rating: 3.8,
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/y/r/v/-original-imagn9nbvvyc3vh4.jpeg?q=70",
    categoryName: "Women Sneakers",
    isDiscount: false,
    discountedPrice: "",
    isBestSeller: false,
    inStock: true,
  },
  {
    _id: uuid(),
    name: "fast lane wn's Running Shoes For Women ",
    brand: "Puma",
    price: "2483",
    size: [7, 8, 9, 10],
    rating: 3.8,
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/n/6/x/6-378184-6-puma-black-sunset-pink-silver-original-imagztb7ukyghzdj.jpeg?q=70",
    categoryName: "Women Sneakers",
    isDiscount: false,
    discountedPrice: "",
    isBestSeller: false,
    inStock: true,
  },
];
