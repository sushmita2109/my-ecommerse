import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./NavBar.css";
import { useProduct } from "../../context/ProductContext";
import Badge from "@material-ui/core/Badge";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

export const NavBar = () => {
  const { dispatch } = useProduct();
  const { wishlistState } = useWishlist();
  const { cartState } = useCart();
  const { loggedIn } = useAuth();

  return (
    <nav>
      <div className="title">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
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
        {loggedIn ? (
          <Link to="/profile" className="actionLink">
            Profile
          </Link>
        ) : (
          <Link className="actionLink" to="/login">
            Login
          </Link>
        )}
        <Link to="/wishlist">
          <Badge
            badgeContent={wishlistState.wishlistProduct.length}
            style={{ color: "white", fontWeight: "bold" }}
          >
            <FavoriteBorderIcon style={{ color: "white" }} />
          </Badge>
        </Link>
        <Link to="/cart">
          <Badge
            badgeContent={cartState.cartProduct.length}
            color="secondary"
            // style={{ color: "white", fontWeight: "bold" }}
          >
            <ShoppingCartIcon style={{ color: "white" }} />
          </Badge>
        </Link>
      </div>
    </nav>
  );
};
