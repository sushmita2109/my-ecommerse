import { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContext";
import "./ProductDisplay.css";

import Card from "@mui/material/Card";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import { makeStyles } from "@material-ui/core/styles";

export const ProductDisplay = () => {
  const { dispatch, filteredProducts } = useProduct();
  const { addItemToCartHandler } = useCart();
  const { addToWishlist } = useWishlist();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch("/api/products").then((resp) => resp.json());
      dispatch({
        type: "GET_DATA",
        data: response.products,
      });
      setIsLoading(false);
    };
    fetchData();
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <div className="loader">
          <CircularProgress size={100} thickness={4} />
        </div>
      ) : (
        <div className="productCard">
          {filteredProducts?.map((product) => (
            <div key={product._id}>
              <Card
                sx={{
                  height: "350px",
                  width: "350px",
                  margin: "0px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  className="product-image"
                  src={product.image}
                  alt="productimage"
                  width="350px"
                  height="350px"
                  onClick={() => navigate(`/product/${product._id}`)}
                />

                <div className="product-title">
                  <p>{product.name}</p>
                </div>
                <div className="brand-rating">
                  <p>{product.brand}</p>
                  <p style={{ display: "flex" }}>
                    {product.rating}
                    <span>
                      <StarIcon sx={{ fontSize: "20px", color: "gold" }} />
                    </span>
                  </p>
                </div>
                {
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      height: "23px",
                      justifyContent: "center",
                    }}
                  >
                    Sizes:{" "}
                    {
                      <div className="shoeSize">
                        {product.size?.map((size, idx) => (
                          <div className="size" key={idx}>
                            {size}
                          </div>
                        ))}
                      </div>
                    }
                  </div>
                }
                <div className="prices">
                  {product.isDiscount && (
                    <div className="discountedPrice">
                      ₹ {product.discountedPrice}
                    </div>
                  )}
                  <div
                    className={
                      product.isDiscount ? "product-price" : "productprice"
                    }
                  >
                    ₹ {product.price}
                  </div>
                </div>
                <div></div>
                <div className="buttons-div">
                  <Button
                    className="cart-btn"
                    onClick={() => addItemToCartHandler(product)}
                    startIcon={<ShoppingCartIcon />}
                  >
                    Add to cart
                  </Button>

                  <Button
                    className="wishlist-btn"
                    onClick={() => addToWishlist(product)}
                    startIcon={<DeleteForeverIcon />}
                  >
                    Add to wishlist
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
