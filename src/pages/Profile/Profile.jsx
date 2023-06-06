import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import "./Profile.css";
import { useState } from "react";
import { UserProfile } from "../../components/UserProfile/UserProfile";
import { UserAddress } from "../../components/UserAddress/UserAddress";

export const Profile = () => {
  const [selectedItem, setSelectedItem] = useState("profile");
  const getComponent = () => {
    if (selectedItem === "profile") {
      return <UserProfile />;
    } else {
      return <UserAddress />;
    }
  };
  return (
    <div>
      <Card className="profile-container">
        <Button onClick={() => setSelectedItem("profile")}>Profile</Button>
        <Button onClick={() => setSelectedItem("address")}>Address</Button>
      </Card>
      {getComponent()}
    </div>
  );
};
