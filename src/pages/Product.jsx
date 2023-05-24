import { FilterProduct } from "../components/FilterProduct/FilterProduct";
import { ProductDisplay } from "../components/ProductDisplay/ProductDisplay";
import "./Product.css";

export const Product = () => {
  return (
    <div className="product">
      <FilterProduct />
      <ProductDisplay />
    </div>
  );
};
