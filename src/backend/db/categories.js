import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Men Sneakers",
    description:
      "Sneakers (also called trainers, athletic shoes, tennis shoes, gym shoes, kicks, sport shoes, flats, running shoes, or runners) are shoes primarily designed for sports or other forms of physical exercise, but which are also widely used for everyday casual wear.",
    image:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/k/y/b/-original-imaghhnxmuhwfv87.jpeg?q=70",
  },
  {
    _id: uuid(),
    categoryName: "Women Sneakers",
    description:
      "Trends do not mean much to you. What matters is affordability along with comfort. You believe brands cannot define who you really are. ",
    image:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/x/9/y/-original-imaggty6muwh4fd7.jpeg?q=70",
  },
];
