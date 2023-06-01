import Input from "@mui/material/Input";
import { Button, Card } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import "./Login.css";
import { useAuth } from "../../context/AuthContext";

export const Login = () => {
  const { authDispatch, authState, validateLogin } = useAuth();

  const location = useLocation();

  const loginUser = () => {
    authDispatch({
      type: "SET_LOCATION",
      payload: location?.state?.from?.pathname,
    });
    validateLogin();
  };

  const handleguestLogin = () => {
    authDispatch({ type: "SET_EMAIL", payload: "adarshbalika@gmail.com" });
    authDispatch({ type: "SET_PASSWORD", payload: "adarshbalika" });
  };

  return (
    <div className="loginPage">
      <h3>Login</h3>
      <label className="inputLogin">
        Email
        <Input
          type="email"
          placeholder="Enter your email"
          onChange={(e) =>
            authDispatch({ type: "SET_EMAIL", payload: e.target.value })
          }
          value={authState.email}
        />
      </label>
      <label className="inputLogin">
        Password
        <Input
          type="password"
          placeholder="Enter password "
          onChange={(e) =>
            authDispatch({ type: "SET_PASSWORD", payload: e.target.value })
          }
          value={authState.password}
        />
      </label>
      <Button className="loginBtn" onClick={loginUser}>
        Login
      </Button>

      <p onClick={handleguestLogin}>Enter test credentials</p>

      <Link className="signupLink" to="/signup">
        create a new account
      </Link>
    </div>
  );
};
