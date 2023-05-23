import { useEffect } from "react";
import { useProduct } from "../../context/ProductContext";

export const ProductDisplay = () => {
  const { state, dispatch } = useProduct();
  console.log(
    "🚀 ~ file: ProductDisplay.jsx:6 ~ ProductDisplay ~ state:",
    state
  );

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
          <img src={product.image} alt="productimage" width="350px" />
          <h5>{product.name}</h5>
        </div>
      ))}
    </div>
  );
};
