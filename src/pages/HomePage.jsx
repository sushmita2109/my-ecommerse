import { NavBar } from "../components/NavBar/NavBar";
import { Category } from "../components/Category/Category";
import { Jumbotron } from "../components/Jumbotron/Jumbotron";

export const HomePage = () => {
  return (
    <div>
      <Jumbotron />
      <Category />
      <h1>HomePage</h1>
    </div>
  );
};
