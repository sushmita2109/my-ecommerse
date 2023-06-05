import { useState } from "react";
import { useProduct } from "../../context/ProductContext";
import { AddressCardChange } from "../AddressCardChange/AddressCardChange";
import "./AddressCard.css";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

export const AddressCard = () => {
  const { selectedAddress } = useProduct();
  const [addressSelectModal, setAddressSelectModal] = useState(false);

  const { name, houseNo, city, state, country, zip } = selectedAddress ?? {};

  return (
    <div className="address-container">
      <Card className="address-details">
        <h3>Delivery Address</h3>
        {selectedAddress ? (
          <p>{`${name}, ${houseNo}, ${city}, ${state}, ${country}, ${zip}`}</p>
        ) : (
          <p>Please select an address</p>
        )}
        <Button
          className="address-btn"
          onClick={() => setAddressSelectModal(true)}
        >
          Change
        </Button>
        {addressSelectModal && (
          <AddressCardChange setAddressSelectModal={setAddressSelectModal} />
        )}
      </Card>
    </div>
  );
};
