import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import "./WishlistCard.css";
import { toast } from "react-toastify";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";

export const WhishlistCard = ({ wishlist }) => {
  const { removeProduct, wishlistDispatch } = useWishlist();
  const { cartDispatch } = useCart();

  const token = localStorage.getItem("Code");

  const moveProductToCart = async (product) => {
    try {
      const response = await fetch(`/api/user/wishlist/${wishlist._id}`, {
        method: "DELETE",
        headers: {
          authorization: token,
        },
      });
      const data = await response.json();
      wishlistDispatch({ type: "REMOVE_WISHLIST", payload: data.wishlist });
      toast.warning(`${product.name} has moved to cart`);
    } catch (e) {
      console.log(e);
    }
    try {
      const response = await fetch("/api/user/cart", {
        method: "POST",
        headers: {
          authorization: token,
        },
        body: JSON.stringify({ product }),
      }).then((res) => res.json());
      cartDispatch({ type: "ADD_CART_PRODUCT", payload: response.cart });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Card className="wishlistcard">
        <img src={wishlist.image} alt="cartimage" width="350px" />
        <div>
          <p>
            {wishlist?.name}-{wishlist?.brand}
          </p>
          {wishlist.isDiscount && (
            <div className="discountedPrice">₹ {wishlist.discountedPrice}</div>
          )}
          <div>
            <p
              className={wishlist.isDiscount ? "product-price" : "productprice"}
            >
              {wishlist?.price}
            </p>
          </div>

          <p style={{ display: "flex" }}>
            {wishlist?.rating}{" "}
            <StarIcon sx={{ fontSize: "20px", color: "gold" }} />
          </p>
          <Button
            onClick={() => moveProductToCart(wishlist)}
            startIcon={<ShoppingCartIcon />}
          >
            Move to Cart
          </Button>
          <Button
            onClick={() => removeProduct(wishlist)}
            startIcon={<DeleteForeverIcon />}
          >
            Remove
          </Button>
        </div>
      </Card>
    </>
  );
};
