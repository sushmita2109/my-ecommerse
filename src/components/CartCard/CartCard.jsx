import { useNavigate } from "react-router-dom";
import { cartReducer } from "../../Reducers/CartReducer";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./CartCard.css";
import ReactLoading from "react-loading";
import { useProduct } from "../../context/ProductContext";

export const CartCard = ({ cart }) => {
  const { increment, decrement, removeProduct, loadingQty, cartDispatch } =
    useCart();
  const { state } = useProduct();
  const { wishlistState, wishlistDispatch } = useWishlist();

  const token = localStorage.getItem("Code");

  const moveToWishlist = async (cart) => {
    try {
      const response = await fetch("/api/user/wishlist", {
        method: "POST",
        headers: {
          authorization: token,
        },
        body: JSON.stringify({ product: cart }),
      });
      const data = await response.json();

      wishlistDispatch({
        type: "ADD_WISHLIST_PRODUCT",
        payload: data.wishlist,
      });
    } catch (e) {
      console.log(e);
    }
    try {
      const response = await fetch(`/api/user/cart/${cart._id}`, {
        method: "DELETE",
        headers: {
          authorization: token,
        },
      });
      const res = await response.json();
      cartDispatch({ type: "REMOVE", payload: res.cart });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Card>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "space-around",
            width: "50vw",
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <img
              src={cart.image}
              classname="item-image"
              alt="cartimage"
              width="300"
              height="300"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p>
              {cart?.name}-{cart?.brand}
            </p>
            <p>{cart?.price}</p>
            <p>{cart?.rating}</p>
            <Stack direction="row" alignItems="center" spacing={1}>
              <IconButton onClick={() => increment(cart)}>
                <AddIcon />
              </IconButton>
              {loadingQty ? (
                <ReactLoading
                  type="spin"
                  color="#0000FF"
                  height={100}
                  width={50}
                />
              ) : (
                <p>{cart?.qty}</p>
              )}
              <IconButton
                onClick={() =>
                  cart.qty <= 1 ? removeProduct(cart) : decrement(cart)
                }
              >
                <RemoveIcon />
              </IconButton>
            </Stack>
            <Button
              onClick={() => moveToWishlist(cart)}
              startIcon={<FavoriteIcon />}
            >
              Move to wishlist
            </Button>
            <Button
              onClick={() => removeProduct(cart)}
              startIcon={<DeleteForeverIcon />}
            >
              Remove
            </Button>
          </div>
        </div>
      </Card>

      {/* {cart.length < 0 && (
        <>
          <button>Checkout</button>
        </>
      )} */}
    </div>
  );
};
