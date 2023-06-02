import { useProduct } from "../../context/ProductContext";
import { useEffect } from "react";
import "./FilterProduct.css";
import { Card } from "@mui/material";

export const FilterProduct = () => {
  const { state, dispatch, ratingValue, sortMethod, priceRange } = useProduct();

  const ratings = [4, 3, 2, 1];

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

  const range = state.allProducts?.reduce(
    (acc, curr) => {
      if (curr.price < acc.min) {
        acc.min = curr.price;
      }
      if (curr.price > acc.max) {
        acc.max = curr.price;
      }
      return acc;
    },
    {
      min: state.allProducts[0]?.price,
      max: state.allProducts[0]?.price,
    }
  );

  return (
    <Card className="filter">
      <div className="filterheading">
        <p>Filter Product</p>
        <p
          className="clearData"
          onClick={() => dispatch({ type: "CLEAR_FILTERS" })}
        >
          Clear
        </p>
      </div>
      <div>
        <p>Price</p>
        <div className="slider">
          <input
            onChange={(e) =>
              dispatch({ type: "PRICE_RANGE", payload: e.target.value })
            }
            type="range"
            min={range.min}
            max={range.max}
            value={priceRange}
            step="100"
          />
        </div>
        <p>Categories</p>
        <div className="category">
          {state.categoryData?.map((category) => (
            <label key={category._id} htmlFor="men">
              <input
                onChange={(e) =>
                  dispatch({ type: "CATEGORIES", payload: e.target.value })
                }
                checked={state.selectedCategory.includes(category.categoryName)}
                type="checkbox"
                name="checkbox"
                value={category.categoryName}
              />
              {category.categoryName}
            </label>
          ))}
        </div>
        <div className="rattingcontainer">
          <p>Rating</p>
          {ratings.map((rating, i) => {
            return (
              <label key={i}>
                <input
                  onChange={(e) =>
                    dispatch({ type: "RATING", payload: e.target.value })
                  }
                  checked={Number(ratingValue) === rating}
                  type="radio"
                  value={rating}
                  name="rating"
                />
                {`${rating} Stars & above`}
              </label>
            );
          })}
        </div>
        <p>Sort by</p>
        <div className="sort">
          <label>
            <input
              type="radio"
              value="ascending"
              name="sort"
              onChange={(e) =>
                dispatch({ type: "SORT_BY_PRICE", payload: e.target.value })
              }
              checked={sortMethod === "ascending"}
            />
            Price-Low to High
          </label>
          <label>
            <input
              onChange={(e) =>
                dispatch({ type: "SORT_BY_PRICE", payload: e.target.value })
              }
              checked={sortMethod === "descending"}
              type="radio"
              value="descending"
              name="sort"
            />
            Price-High to Low
          </label>
        </div>
      </div>
    </Card>
  );
};
