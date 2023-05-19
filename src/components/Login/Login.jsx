import Input from "@mui/material/Input";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  return (
    <div className="loginPage">
      <h3>Login</h3>
      <label className="inputLogin">
        Email
        <Input placeholder="Enter your email" />
      </label>
      <label className="inputLogin">
        Password
        <Input placeholder="Enter password " />
      </label>
      <Button className="loginBtn">Login</Button>
      <Link className="signupLink">create a new account</Link>
    </div>
  );
};
