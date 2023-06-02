import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { authReducer } from "../Reducers/AuthReducer";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useProduct } from "./ProductContext";

export const AuthContext = createContext();
let userAuth = "";

const intialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  location: "",
  loggedIn: false,
};

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, intialState);
  const [userInfo, setUserInfo] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useProduct();

  useEffect(() => {
    if (userInfo) {
      userAuth === "login" ? loginHandler() : signupHandler();
    }
  }, [userInfo]);

  const requestOptions = {
    method: "POST",
    body: JSON.stringify(userInfo),
  };

  const loginHandler = async () => {
    try {
      const res = await fetch("/api/auth/login", requestOptions);
      const data = await res.json();
      console.log("data", data);
      if (data.errors) {
        throw data.errors;
      }
      toast("Login Succesfully");
      setLoggedIn(true);
      localStorage.setItem("Code", data.encodedToken);
      console.log(authState.location);
      navigate(authState.location);
    } catch (e) {
      toast.error(e[0]);
    }
  };

  const signupHandler = async () => {
    try {
      const res = await fetch("/api/auth/signup", requestOptions);
      const data = await res.json();

      toast("SignUp Succesfully");
      setLoggedIn(true);
      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("user", JSON.stringify(data.createdUser));
      dispatch({ type: "SET_USER_DATA", payload: data.createdUser });
      navigate(authState.location);
    } catch (e) {
      console.log(e);
    }
  };

  const validateSignUp = () => {
    if (
      authState.email.trim().length <= 0 ||
      authState.password.trim().length <= 0 ||
      authState.firstName.trim().length <= 0 ||
      authState.lastName.trim().length <= 0
    ) {
      return toast.error("All details are required");
    }
    userAuth = "signup";
    setUserInfo({
      email: authState.email,
      password: authState.password,
      firstName: authState.firstName,
      lastName: authState.lastName,
    });
  };

  const validateLogin = () => {
    if (
      authState.email.trim().length <= 0 &&
      authState.password.trim().length <= 0
    ) {
      return toast.error("Email and Password cannot be ampty");
    } else if (authState.email.trim().length <= 0) {
      return toast.error("Email cannot be empty");
    } else if (authState.password.trim().length <= 0) {
      return toast.error("Password cannot be empty");
    }

    userAuth = "login";
    setUserInfo({ email: authState.email, password: authState.password });
  };
  return (
    <AuthContext.Provider
      value={{
        authDispatch,
        authState,
        validateLogin,
        loggedIn,
        validateSignUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
