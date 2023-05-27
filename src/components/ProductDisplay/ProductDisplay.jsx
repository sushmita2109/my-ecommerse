import { useEffect } from "react";
import { useProduct } from "../../context/ProductContext";
import "./ProductDisplay.css";
import { useNavigate } from "react-router-dom";

export const ProductDisplay = () => {
  const { dispatch, filteredProducts } = useProduct();

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
                <button className="cart-btn" onClick={() => navigate("/cart")}>
                  Add to cart
                </button>
                <button className="wishlist-btn">Add to wishlist</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
