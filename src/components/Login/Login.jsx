import Input from "@mui/material/Input";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div>
      <label>
        <Input placeholder="Enter your email" />
        Email
      </label>
      <label>
        <Input placeholder="Enter password " />
      </label>
      <Button>Login</Button>
      <Link>create a new account</Link>
    </div>
  );
};
