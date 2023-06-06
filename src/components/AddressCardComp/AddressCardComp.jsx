import { useState } from "react";
import { useProduct } from "../../context/ProductContext";
import { AddressModal } from "../AddressModal/AddressModal";
import "./AddressCardComp.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Button from "@mui/material/Button";
import AutorenewIcon from "@mui/icons-material/Autorenew";

export const AddressCardComp = ({ address }) => {
  const { name, houseNo, city, state, country, zip, phoneNo } = address;
  const [showAddressModal, setShowAddressModal] = useState(false);
  const { selectedAddress, dispatch } = useProduct();

  return (
    <div className="address-card">
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          marginTop: "20px",
        }}
      >
        <input
          className="radio-address-btn"
          type="radio"
          name="address-radio"
          checked={selectedAddress?.id === address.id}
          onChange={() =>
            dispatch({ type: "SET_SELECTED_ADDRESS", payload: address })
          }
        />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{houseNo}</p>
        <p>
          {city}, {state}
        </p>
        <p>{zip}</p>
        <p>{country}</p>
        <p>+91 - {phoneNo}</p>
        <div className="btn-container">
          <Button
            className="btn-update"
            onClick={() => setShowAddressModal(true)}
            startIcon={<AutorenewIcon />}
          >
            Update
          </Button>
          <Button
            className="btn-remove"
            onClick={(e) =>
              dispatch({ type: "DELETE_ADDRESS", payload: address })
            }
            startIcon={<DeleteForeverIcon />}
          >
            Remove
          </Button>

          <AddressModal
            showAddressModal={showAddressModal}
            setShowAddressModal={setShowAddressModal}
            mode="update"
            previousAddress={address}
          />
        </div>
      </div>
    </div>
  );
};
