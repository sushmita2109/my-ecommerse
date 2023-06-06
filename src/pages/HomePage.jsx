import { CategoryCard } from "../components/CategoryCard/CategoryCard";
import { Footer } from "../components/Footer/Footer";
import { Jumbotron } from "../components/Jumbotron/Jumbotron";

export const HomePage = () => {
  return (
    <div>
      <Jumbotron />

      <CategoryCard />
      <Footer />
    </div>
  );
};
