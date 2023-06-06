import { useParams } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";
import Card from "@mui/material/Card";
import "./IndiviualProductCard.css";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

export const IndividualProductCard = () => {
  const { productId } = useParams();
  const { state } = useProduct();
  const { addToWishlist } = useWishlist();
  const { addItemToCartHandler } = useCart();

  const selectedProduct = state.allProducts.find(
    ({ _id }) => _id === productId
  );
  const {
    _id,
    name,
    brand,
    image,
    price,
    size,
    categoryName,
    isDiscount,
    rating,
    discountedPrice,
    inStock,
    isBestSeller,
  } = selectedProduct ?? "";
  return (
    <Card className="indiviual-product-container">
      <img src={image} alt="productImage" />
      <div className="product-details">
        <p>{name}</p>
        <div className="brand-rating">
          <p>{brand}</p>
          <p style={{ display: "flex" }}>
            {rating}
            <span>
              <StarIcon sx={{ fontSize: "20px", color: "gold" }} />
            </span>
          </p>
        </div>
        <div className="price-ratting-container">
          {isDiscount ? <p>{discountedPrice}</p> : <p>{price}</p>}
        </div>
        <div className="size-containeer">
          {size?.map((item, idx) => (
            <p
              key={idx}
              className={inStock ? "whitebackground" : "greybackground"}
            >
              {item}
            </p>
          ))}
        </div>
        <div className="buttons-div">
          <Button
            className="cart-btn"
            onClick={() => addItemToCartHandler(selectedProduct)}
            startIcon={<ShoppingCartIcon />}
          >
            Add to cart
          </Button>

          <Button
            className="wishlist-btn"
            onClick={() => addToWishlist(selectedProduct)}
            startIcon={<DeleteForeverIcon />}
          >
            Add to wishlist
          </Button>
        </div>
      </div>
    </Card>
  );
};
