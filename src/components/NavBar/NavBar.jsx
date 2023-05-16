import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export const NavBar = () => {
  return (
    <nav>
      <p>Shopify</p>
      <label>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" placeholder="Search" />
      </label>
    </nav>
  );
};
