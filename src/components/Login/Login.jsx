import Input from "@mui/material/Input";
import { Button } from "@mui/material";
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

  return (
    <div className="loginPage">
      <h3>Login</h3>
      <label className="inputLogin">
        Email
        <Input
          placeholder="Enter your email"
          type="text"
          onChange={(e) =>
            authDispatch({ type: "SET_EMAIL", payload: e.target.value })
          }
          value={authState.email}
        />
      </label>
      <label className="inputLogin">
        Password
        <Input
          placeholder="Enter password "
          onChange={(e) =>
            authDispatch({ type: "SET_PASSWORD", payload: e.target.value })
          }
          value={authDispatch.password}
        />
      </label>
      <Button className="loginBtn" onClick={loginUser}>
        Login
      </Button>
      <Link className="signupLink" to="/signup">
        create a new account
      </Link>
    </div>
  );
};
