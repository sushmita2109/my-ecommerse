import { useEffect } from "react";
import { useProduct } from "../../context/ProductContext";
import "./ProductDisplay.css";

export const ProductDisplay = () => {
  const { state, dispatch } = useProduct();

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
    <div>
      <h1>Product display</h1>
      {state?.allProducts?.map((product) => (
        <div key={product._id} className="productCard">
          <div className="productitems">
            <img
              className="product-image"
              src={product.image}
              alt="productimage"
              width="350px"
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
          </div>
        </div>
      ))}
    </div>
  );
};
