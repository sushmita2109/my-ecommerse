import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav>
      <div className="title">
        <p>SneakerShop</p>
      </div>

      <div className="search">
        <Input
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
        <FavoriteBorderIcon />
        <ShoppingCartIcon />
        <p>cart</p>
      </div>
    </nav>
  );
};
