import { useEffect } from "react";
import { useProduct } from "../../context/ProductContext";
import "./ProductDisplay.css";

import Card from "@mui/material/Card";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

export const ProductDisplay = () => {
  const { dispatch, filteredProducts } = useProduct();
  const { addItemToCartHandler } = useCart();
  const { addToWishlist } = useWishlist();

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
      <h1>Product display</h1>
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
              <img
                className="product-image"
                src={product.image}
                alt="productimage"
                width="350px"
                height="350px"
              />
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

              <div className="product-price"> ₹ {product.price}</div>
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
