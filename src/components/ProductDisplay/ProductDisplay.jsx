import { useEffect } from "react";
import { useProduct } from "../../context/ProductContext";
import "./ProductDisplay.css";

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
            <div className="productitems">
              <img
                className="product-image"
                src={product.image}
                alt="productimage"
                width="350px"
                height="250px"
              />
              <div className="product-title ">
                {product.brand}-{product.name}
              </div>
              <div className="shoeSize">
                {product.size?.map((size, idx) => (
                  <div key={idx}>{size}</div>
                ))}
              </div>

              <div className="product-price">{product.price}</div>
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
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
