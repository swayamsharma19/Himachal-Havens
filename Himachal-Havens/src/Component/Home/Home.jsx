import React from "react";
import "./Home.css";
import Card from "../Card/Card";
import house from "../../assets/House.jpg";
import house1 from "../../assets/HouseRoom.jpg";
import house2 from "../../assets/HouseGarden.jpg";
import homestay from "../../assets/Homestay.jpg";
import homestay1 from "../../assets/HomestayRoom.jpg";
import homestay2 from "../../assets/HomestayView.jpg";
import villa from "../../assets/villa.jpg";
import villa1 from "../../assets/villaRoom.jpg";
import villa2 from "../../assets/villaDine.jpg";
import cottage from "../../assets/cottage.jpg";
import cottage1 from "../../assets/cottageRoom.jpg";
import cottage2 from "../../assets/cottageView.jpeg";

function Home() {
  return (
    <div id="home">
      <Card
        image1={house}
        image2={house1}
        image3={house2}
        title={"2 BHK Apartment in Manali"}
        price={"10,000"}
      />

       <Card
        image1={homestay}
        image2={homestay1}
        image3={homestay2}
        title={"4 BHK HomeStay in Kufri"}
        price={"60,000"}
      />

      <Card
        image1={villa}
        image2={villa1}
        image3={villa2}
        title={"5 BHK Villa in Kasauli"}
        price={"60,000"}
      />

      <Card
        image1={cottage}
        image2={cottage1}
        image3={cottage2}
        title={"4 BHK Cottage in Jibhi"}
        price={"50,000"}
      />
    </div>
  );
}

export default Home;
