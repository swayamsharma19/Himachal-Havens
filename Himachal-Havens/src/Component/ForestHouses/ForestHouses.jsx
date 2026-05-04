import react from "react";
import "./ForestHouses.css";
import Card from "../Card/Card";
import cottage from "../../assets/cottage.jpg";
import cottage1 from "../../assets/cottageRoom.jpg";
import cottage2 from "../../assets/cottageView.jpeg";
import cottageBir from "../../assets/cottageBir.jpg";
import cottageBir1 from "../../assets/cottageFront.jpg";
import cottageBir2 from "../../assets/cottageBalcony.jpg";

function ForestHouses() {
  return (
    <div id="houses">
      
        <Card
        image1={cottage}
        image2={cottage1}
        image3={cottage2}
        title={"4 BHK Cottage in Jibhi"}
        price={"50,000"}
      />

       <Card
        image1={cottageBir}
        image2={cottageBir1}
        image3={cottageBir2}
        title={"3 BHK Cottage in Bir"}
        price={"40,000"}
      />

    </div>
  );
}

export default ForestHouses;
