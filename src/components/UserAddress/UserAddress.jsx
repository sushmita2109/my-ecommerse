import { useState } from "react";
import { useProduct } from "../../context/ProductContext";
import { AddressCardComp } from "../AddressCardComp/AddressCardComp";
import { AddressModal } from "../AddressModal/AddressModal";
import Button from "@mui/material/Button";

export const UserAddress = () => {
  const { addresses } = useProduct();
  const [showAddressModal, setShowAddressModal] = useState(false);
  return (
    <div className="user-address">
      {addresses?.map((address) => (
        <AddressCardComp address={address} key={address.id} />
      ))}
      <Button className="add-adress" onClick={() => setShowAddressModal(true)}>
        + Add New Address
      </Button>

      <AddressModal
        setShowAddressModal={setShowAddressModal}
        showAddressModal={showAddressModal}
        mode="add"
      />
    </div>
  );
};
