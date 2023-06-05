import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Mockman } from "./pages/Mockman";
import { Login } from "./components/Login/Login";
import { SignUp } from "./components/SignUp/SignUp";
import { Product } from "./pages/Product";
import { NavBar } from "./components/NavBar/NavBar";
import { RequireAuth } from "./components/RequireAuth/RequireAuth";
import { Cart } from "./pages/Cart/Cart";
import { WishList } from "./pages/Wishlist";
import { IndividualProduct } from "./pages/IndiviualProduct/IndividualProduct";
import { Checkout } from "./pages/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/mockman" element={<Mockman />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:productId" element={<IndividualProduct />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              <WishList />
            </RequireAuth>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
