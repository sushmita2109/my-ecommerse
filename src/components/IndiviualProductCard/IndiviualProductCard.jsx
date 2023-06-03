import { useParams } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";
import Card from "@mui/material/Card";
import LabelIcon from "@mui/icons-material/Label";
import IconButton from "@mui/material/IconButton";
import "./IndiviualProductCard.css";

export const IndividualProductCard = () => {
  const { productId } = useParams();
  const { state } = useProduct();

  const selectedProduct = state.allProducts.find(
    ({ _id }) => _id === productId
  );
  const {
    _id,
    name,
    brand,
    image,
    price,
    size,
    categoryName,
    isDiscount,
    rating,
    discountedPrice,
    inStock,
    isBestSeller,
  } = selectedProduct ?? "";
  return (
    <Card
      className="indiviual-product-container"
      //   sx={{ backgroundColor: "plum" }}
    >
      <div className="image-container">
        {/* {isBestSeller ? (
          <IconButton aria-label="Example">
            <LabelIcon sx={{ fontSize: 100 }} label="BEST SELLER" />
          </IconButton>
        ) : null} */}
        <img src={image} alt="productImage" />
      </div>
      <div className="product-details">
        <p>
          {name}-{brand}
        </p>
        <div className="price-ratting-container">
          {isDiscount ? <p>{discountedPrice}</p> : <p>{price}</p>}
          <p>{rating}</p>
        </div>
        <div className="size-containeer">
          {size?.map((item, idx) => (
            <p
              key={idx}
              className={inStock ? "whitebackground" : "greybackground"}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </Card>
  );
};