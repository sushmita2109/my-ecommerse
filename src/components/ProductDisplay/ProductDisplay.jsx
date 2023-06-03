import { useEffect } from "react";
import { useProduct } from "../../context/ProductContext";
import "./ProductDisplay.css";

import Card from "@mui/material/Card";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { useNavigate } from "react-router-dom";

export const ProductDisplay = () => {
  const { dispatch, filteredProducts } = useProduct();
  const { addItemToCartHandler } = useCart();
  const { addToWishlist } = useWishlist();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/products").then((resp) => resp.json());
      dispatch({
        type: "GET_DATA",
        data: response.products,
      });
    };
    fetchData();
  }, [dispatch]);

  return (
    <>
      <div className="productCard">
        {filteredProducts?.map((product) => (
          <div key={product._id}>
            {/* <div className="productitems"> */}
            <Card
              sx={{
                height: "500px",
                width: "350px",
                margin: "4px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className="product-image-container"
                onClick={() => navigate(`/product/${product._id}`)}
              >
                <img
                  className="product-image"
                  src={product.image}
                  alt="productimage"
                  width="350px"
                  height="350px"
                />
              </div>
              <div className="product-title">
                {product.brand}-{product.name}
              </div>
              {
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Sizes:{" "}
                  {
                    <div className="shoeSize">
                      {product.size?.map((size, idx) => (
                        <div key={idx}>{size}</div>
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
              <div className="buttons-div">
                <button
                  className="cart-btn"
                  onClick={() => addItemToCartHandler(product)}
                >
                  Add to cart
                </button>
                <button
                  className="wishlist-btn"
                  onClick={() => addToWishlist(product)}
                >
                  Add to wishlist
                </button>
              </div>
            </Card>
            {/* </div> */}
          </div>
        ))}
      </div>
    </>
  );
};
