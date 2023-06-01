import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const RequireAuth = ({ children }) => {
  let location = useLocation();
  const { loggedIn } = useAuth();
  console.log(
    "🚀 ~ file: RequireAuth.jsx:7 ~ RequireAuth ~ authState:",
    loggedIn
  );

  return loggedIn ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
