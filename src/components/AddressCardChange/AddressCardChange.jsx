import CloseIcon from "@mui/icons-material/Close";
import { UserAddress } from "../UserAddress/UserAddress";
import "./AddressCardChange.css";

export const AddressCardChange = ({ setAddressSelectModal }) => {
  return (
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
  );
};
