import react from "react";
import "./TentHouses.css";
import Card from "../Card/Card";
import campKasol from "../../assets/campKasol.jpg";
import campKasol1 from "../../assets/kasolRoom.jpg";
import campKasol2 from "../../assets/kasolFront.jpg";
import campTosh from "../../assets/toshFront.jpg";
import campTosh1 from "../../assets/toshCamp.jpg";
import campTosh2 from "../../assets/toshRoom.jpg";
import campBarot from "../../assets/barotFront.jpeg";
import campBarot1 from "../../assets/barotRoom.jpeg";
import campBarot2 from "../../assets/campBarot.jpeg";

function TentHouses() {
  return (
    <div id="houses">
      <Card
        image1={campBarot}
        image2={campBarot1}
        image3={campBarot2}
        title={"Camping Site at Barot"}
        price={"90,000"}
      />

      <Card
        image1={campKasol}
        image2={campKasol1}
        image3={campKasol2}
        title={"Camping Site at Kasol"}
        price={"70,000"}
      />

      <Card
        image1={campTosh}
        image2={campTosh2}
        image3={campTosh1}
        title={"Camping Site at Tosh"}
        price={"50,000"}
      />
      
    </div>
  );
}

export default TentHouses;
