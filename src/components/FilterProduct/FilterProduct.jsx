import { useProduct } from "../../context/ProductContext";

export const FilterProduct = () => {
  const { state } = useProduct();
  const category = [];
  const brands = [];
  return (
    <div>
      <h1>Filter Product</h1>
      <div>
        <p>Price</p>
        <div className="slider">
          <input
            type="range"
            min="1000"
            max="8000"
            className="slider"
            id="myRange"
          />
        </div>
        <p>Categories</p>
        <div className="category">
          {state.allProducts?.map((product) => {
            if (!category.includes(product.categoryName)) {
              category.push(product.categoryName);

              return (
                <label htmlFor="category" key={product._id}>
                  <input
                    type="checkbox"
                    id="category"
                    name="category"
                    value={product.categoryName}
                  />
                  {product.categoryName}
                </label>
              );
            } else {
              return null;
            }
          })}
        </div>
        <p>Brands</p>
        <div className="brands">
          {state.allProducts?.map((product) => {
            if (!brands.includes(product.brand)) {
              brands.push(product.brand);
              return (
                <label htmlFor="brand" key={product._id}>
                  <input
                    type="checkbox"
                    id="brand"
                    name="brand"
                    value={product.brand}
                  />
                  {product.brand}
                </label>
              );
            } else {
              return null;
            }
          })}
        </div>
        <p>Rating</p>
        <div className="ratting">
          <label>
            <input type="radio" value="4" />4 stars & above
          </label>
          <label>
            <input type="radio" value="3" />3 stars & above
          </label>
          <label>
            <input type="radio" value="2" />2 stars & above
          </label>
          <label>
            <input type="radio" value="1" />1 stars & above
          </label>
        </div>
        <p>Sort by</p>
        <div className="sort">
          <label>
            <input type="radio" value="low" />
            Price-Low to High
          </label>
          <label>
            <input type="radio" value="high" />
            Price-High to Low
          </label>
        </div>
      </div>
    </div>
  );
};
