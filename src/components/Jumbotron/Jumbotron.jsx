import "./Jumbotron.css";
import { Link } from "react-router-dom";

export const Jumbotron = () => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">SneakerStore</h1>
        <p className="lead">This is a brand new sneaker store.</p>

        <Link className="btn" to="/product" role="button">
          Shop more
        </Link>
      </div>
    </div>
  );
};
