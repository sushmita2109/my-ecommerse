import "./Jumbotron.css";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export const Jumbotron = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/product");
  };

  return (
    <Card class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">SneakerStore</h1>
        <p class="lead">
          If you are looking for stylish shoes online, then you are bound to be
          spoiled for choice.
        </p>
        <Button onClick={() => handleExplore()}>Explore More</Button>
      </div>
    </Card>
  );
};
