import { IndividualProductCard } from "../../components/IndiviualProductCard/IndiviualProductCard";

export const IndividualProduct = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Indiviual Product</h1>
      <IndividualProductCard />
    </div>
  );
};
