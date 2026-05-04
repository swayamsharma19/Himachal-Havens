import react from "react";
import "./PoolHouses.css";
import Card from "../Card/Card";
import villa from "../../assets/villa.jpg";
import villa1 from "../../assets/villaRoom.jpg";
import villa2 from "../../assets/villaDine.jpg";

function PoolHouses() {
  return (
    <div id="houses">
      <Card
        image1={villa}
        image2={villa1}
        image3={villa2}
        title={"5 BHK Villa in Kasauli"}
        price={"60,000"}
      />
    </div>
  );
}

export default PoolHouses;
