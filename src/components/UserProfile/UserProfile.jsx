import { Button } from "@mui/material";
import { useProduct } from "../../context/ProductContext";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserProfile = () => {
  const { userFirstName, userLastName } = useProduct();
  const { setLoggedIn, authDispatch } = useAuth();
  const { cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn(false);
    cartDispatch({ type: "CLEAR_CART", payload: [] });
    wishlistDispatch({ type: "CLEAR_WISHLIST", payload: [] });
    localStorage.removeItem("Code");
    localStorage.removeItem("user");
    authDispatch({ type: "LOG_OUT" });
    toast.success("Logged Out Successfully!");
    navigate("/");
  };
  return (
    <div>
      <h3>
        Welcome {userFirstName} {userLastName}
      </h3>
      <Button onClick={() => handleLogout()}>Logout</Button>
    </div>
  );
};
