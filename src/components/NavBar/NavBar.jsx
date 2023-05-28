import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./NavBar.css";
import { useProduct } from "../../context/ProductContext";

export const NavBar = () => {
  const { dispatch } = useProduct();
  return (
    <nav>
      <div className="title">
        <Link to="/">
          {" "}
          <p>SneakerShop</p>
        </Link>
      </div>

      <div className="search">
        <Input
          onChange={(e) =>
            dispatch({ type: "SEARCH_VALUE", payload: e.target.value })
          }
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </div>
      <div className="actions">
        <Link className="actionLink" to="/login">
          Login
        </Link>
        <Link to="/wishlist">
          <FavoriteBorderIcon />
        </Link>
        <Link to="/cart">
          <ShoppingCartIcon />
        </Link>

        <p>cart</p>
      </div>
    </nav>
  );
};
