import { Button } from "@mui/material";
import "./Jumbotron.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Jumbotron = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/product");
  };

  return (
    <div>
      <div className="jumbotron">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/013/773/654/small/banner-with-new-pair-of-white-sneakers-isolated-on-light-yellow-and-orange-background-sportive-pair-of-shoes-for-mockup-fashionable-stylish-sports-casual-shoes-photo.jpg"
          alt="jumboImage"
          style={{
            width: "1500px",
            height: "250px",
            objectFit: "fill",
            aspectRatio: 0.5,
            position: "relative",
          }}
        />
        <h1 className="jumbotitle">SneakerStore </h1>
        <Button className="btn" onClick={() => handleExplore()}>
          Explore More
        </Button>
      </div>
    </div>
  );
};
