import React from "react";
import { useAuth } from "../../context/AuthContext";
export const Cart = () => {
  const { authState } = useAuth();
  return (
    <div>
      <h1>Cart</h1>
      {authState.loggedIn && <></>}
    </div>
  );
};
