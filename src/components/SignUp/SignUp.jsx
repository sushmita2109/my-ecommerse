import Input from "@mui/material/Input";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../Login/Login.css";

export const SignUp = () => {
  return (
    <div className="loginPage">
      <h3>SignUp</h3>
      <label className="inputLogin">
        Email
        <Input placeholder="Enter your email" />
      </label>
      <label className="inputLogin">
        Password
        <Input placeholder="Enter password " />
      </label>
      <Button className="loginBtn">SignUp</Button>
      <Link className="signupLink" to="/login">
        Alredy have a account
      </Link>
    </div>
  );
};
