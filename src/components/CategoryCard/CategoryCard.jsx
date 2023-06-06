import { useProduct } from "../../context/ProductContext";
import Card from "@mui/material/Card";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.css";

export const CategoryCard = () => {
  const { categoryData, dispatch } = useProduct();

  const handleCategory = (categoryName) => {
    dispatch({ type: "CATEGORIES", payload: categoryName });
  };

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
    <Card>
      <h1
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Categories
      </h1>
      <div className="category-container">
        {categoryData.map((category) => {
          return (
            <div key={category._id} className="category-card">
              <h3
                style={{
                  margin: "1px",
                }}
              >
                {category.categoryName}
              </h3>
              <Link
                to="/product"
                onClick={() => handleCategory(category.categoryName)}
              >
                <img src={category.image} alt="categoryImage" />
              </Link>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
