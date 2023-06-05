import { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContext";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";

export const AddressModal = ({
  setShowAddressModal,
  showAddressModal,
  mode,
  previousAddress,
}) => {
  console.log(
    "🚀 ~ file: AddressModal.jsx:14 ~ showAddressModal:",
    showAddressModal
  );
  const { addresses, dispatch } = useProduct();
  const [address, setAddress] = useState({
    name: "",
    houseNo: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    phoneNo: "",
  });

  const dummyAddress = {
    id: addresses.length + 1,
    name: "Sushmita",
    houseNo: "NCC phase 1",
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
    zip: "320466",
    phoneNo: "99999999",
  };

  useEffect(() => {
    if (mode === "add") {
      setAddress({ ...address, id: addresses.length + 1 });
    }
    if (mode === "update") {
      setAddress({ ...previousAddress });
    }
  }, []);

  const handleAddressAddOrUpdate = () => {
    if (
      address.name.trim().length === 0 ||
      address.houseNo.trim().length === 0 ||
      address.city.trim().length === 0 ||
      address.state.trim().length === 0 ||
      address.country.trim().length === 0 ||
      address.zip.trim().length === 0 ||
      address.phoneNo.trim().length === 0
    ) {
      toast.error("Input fields cannot be empty!");
    } else {
      mode === "add"
        ? dispatch({ type: "ADD_ADDRESS", payload: address })
        : dispatch({ type: "UPDATE_ADDRESS", payload: address });
      setShowAddressModal(false);
    }
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Modal
      open={showAddressModal}
      onClose={() => setShowAddressModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card style={style}>
        <div
          className="modal__close"
          onClick={() => setShowAddressModal(false)}
        >
          <CloseIcon />
        </div>

        <section
          className="address-container"
          onClick={(e) =>
            e.target.tagName === "SECTION" && setShowAddressModal(false)
          }
        >
          <div>
            <fieldset>
              <legend>Name</legend>
              <input
                type="text"
                placeholder="Sushmita"
                value={address.name}
                onChange={(e) =>
                  setAddress({ ...address, name: e.target.value })
                }
              />
            </fieldset>
            <fieldset>
              <legend>House No</legend>
              <input
                type="text"
                placeholder="NCC phase 1"
                value={address.houseNo}
                onChange={(e) =>
                  setAddress({ ...address, houseNo: e.target.value })
                }
              />
            </fieldset>
            <fieldset>
              <legend>City</legend>
              <input
                type="text"
                placeholder="Bangalore"
                value={address.city}
                onChange={(e) =>
                  setAddress({ ...address, city: e.target.value })
                }
              />
            </fieldset>
            <fieldset>
              <legend>State</legend>
              <input
                type="text"
                placeholder="Karnataka"
                value={address.state}
                onChange={(e) =>
                  setAddress({ ...address, state: e.target.value })
                }
              />
            </fieldset>
            <fieldset>
              <legend>Country</legend>
              <input
                type="text"
                placeholder="India"
                value={address.country}
                onChange={(e) =>
                  setAddress({ ...address, country: e.target.value })
                }
              />
            </fieldset>
            <fieldset>
              <legend>Zip-code</legend>
              <input
                type="text"
                placeholder="320466"
                value={address.zip}
                onChange={(e) =>
                  setAddress({ ...address, zip: e.target.value })
                }
              />
            </fieldset>
            <fieldset>
              <legend>Phone No</legend>
              <input
                type="text"
                placeholder="+91-99999999"
                value={address.phoneNo}
                onChange={(e) =>
                  setAddress({ ...address, phoneNo: e.target.value })
                }
              />
            </fieldset>
            <div>
              <button
                className="add__address__btn"
                onClick={handleAddressAddOrUpdate}
              >
                {mode === "add" ? "Add Address" : "Update Address"}
              </button>

              <button
                className="dummy__address__btn"
                onClick={() => setAddress(dummyAddress)}
              >
                Dummy Address
              </button>
            </div>
          </div>
        </section>
      </Card>
    </Modal>
  );
};
