import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const NavBar = () => {
  return (
    <nav>
      <p>Shopify</p>
      <div>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </div>
      <Button>Login</Button>
      <FavoriteBorderIcon />
      <ShoppingCartIcon />
      <p>cart</p>
    </nav>
  );
};
