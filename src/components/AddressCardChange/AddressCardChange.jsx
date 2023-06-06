import CloseIcon from "@mui/icons-material/Close";
import { UserAddress } from "../UserAddress/UserAddress";
import "./AddressCardChange.css";
import Card from "@mui/material/Card";

export const AddressCardChange = ({ setAddressSelectModal }) => {
  return (
    <Card>
      <section
        className="address-select"
        onClick={(e) =>
          e.target.tagName === "SECTION" && setAddressSelectModal(false)
        }
      >
        <div
          className="modal__close"
          onClick={() => setAddressSelectModal(false)}
        >
          <CloseIcon />
        </div>
        <UserAddress />
      </section>
    </Card>
  );
};
