import { CategoryCard } from "../components/CategoryCard/CategoryCard";
import { Footer } from "../components/Footer/Footer";
import { Jumbotron } from "../components/Jumbotron/Jumbotron";
import "./Homepage.css";
export const HomePage = () => {
  return (
    <div>
      <Jumbotron />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "centre",
          justifyContent: "center",
        }}
      >
        <CategoryCard />
      </div>

      <Footer />
    </div>
  );
};
