import { Button, Card } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import "../Login/Login.css";
import "./SignUp.css";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useAuth } from "../../context/AuthContext";

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    authDispatch,
    authState: { firstName, lastName, email, password },
    validateSignUp,
  } = useAuth();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const location = useLocation();

  const handleSignup = () => {
    authDispatch({
      type: "SET_LOCATION",
      payload: location?.state?.from?.pathname,
    });
    validateSignUp();
  };

  return (
    <Box className="box">
      <Card className="signup-container">
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "firstname",
            }}
            value={firstName}
            onChange={(e) =>
              authDispatch({ type: "SET_FIRSTNAME", payload: e.target.value })
            }
          />
          <FormHelperText id="outlined-weight-helper-text">
            First Name
          </FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight1"
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "lastname",
            }}
            value={lastName}
            onChange={(e) =>
              authDispatch({ type: "SET_LASTNAME", payload: e.target.value })
            }
          />
          <FormHelperText id="outlined-weight-helper-text">
            Last Name
          </FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight2"
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "email",
            }}
            value={email}
            onChange={(e) =>
              authDispatch({ type: "SET_EMAIL", payload: e.target.value })
            }
          />
          <FormHelperText id="outlined-weight-helper-text">
            Email
          </FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            value={password}
            onChange={(e) =>
              authDispatch({ type: "SET_PASSWORD", payload: e.target.value })
            }
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <label className="checkbox">
          <input type="checkbox" />I accept all Terms & Conditions
        </label>
        <Button className="loginBtn" onClick={handleSignup}>
          SignUp
        </Button>
        <Link className="signupLink" to="/login">
          Alredy have a account
        </Link>
      </Card>
    </Box>
  );
};
