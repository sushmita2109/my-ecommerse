import { useProduct } from "../../context/ProductContext";
import { useEffect, useState } from "react";

export const FilterProduct = () => {
  const { state, dispatch, brandedProduct } = useProduct();

  const brands = [];
  useEffect(() => {
    const GetData = async () => {
      const response = await fetch("/api/categories").then((resp) =>
        resp.json()
      );

      dispatch({
        type: "CATEGORY_DATA",
        data: response.categories,
      });
    };
    GetData();
  }, [dispatch]);

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
          <label htmlFor="men">
            <input
              type="checkbox"
              id="checkbox1"
              name="checkbox1"
              value="Men Sneakers"
            />
            Mens Sneakers
          </label>
          <label htmlFor="women">
            <input
              type="checkbox"
              id="checkbox2"
              name="checkbox2"
              value="Women Sneakers"
            />
            Womens Sneakers
          </label>
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
                    onChange={() => brandedProduct(product.brand)}
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
