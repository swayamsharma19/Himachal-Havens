
import React, { useContext } from "react";
import { dataContext } from "../../Context/Usercontext";
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
import cottageBir from "../../assets/cottageBir.jpg";
import cottageBir1 from "../../assets/cottageFront.jpg";
import cottageBir2 from "../../assets/cottageBalcony.jpg";
import homestayDalhousie from "../../assets/homestayDalhousie.jpg";
import homestayDalhousie1 from "../../assets/dalhousieRoom.jpg";
import homestayDalhousie2 from "../../assets/dalhousieFront.jpg";
import shimlaApartment from "../../assets/shimlaApartment.jpg";
import shimlaApartment1 from "../../assets/shimlaApartmentRoom.jpg";
import shimlaApartment2 from "../../assets/ApartmentRoom.jpg";
import campKasol from "../../assets/campKasol.jpg";
import campKasol1 from "../../assets/kasolRoom.jpg";
import campKasol2 from "../../assets/kasolFront.jpg";
import campTosh from "../../assets/toshFront.jpg";
import campTosh1 from "../../assets/toshCamp.jpg";
import campTosh2 from "../../assets/toshRoom.jpg";
import campBarot from "../../assets/barotFront.jpeg";
import campBarot1 from "../../assets/barotRoom.jpeg";
import campBarot2 from "../../assets/campBarot.jpeg";
import apartmentRohru from "../../assets/apartmentRohru.jpg";
import apartmentRohru1 from "../../assets/rohruRoom.jpg";
import apartmentRohru2 from "../../assets/rohruRoom2.jpg";
import homestayManali from "../../assets/manaliHomestay.jpg";
import homestayManali1 from "../../assets/manaliFront.jpeg";
import homestayManali2 from "../../assets/manaliRoom.jpg";

function Home() {
    let {
      title,
      setTitle,
      addListing,
      setaddListing,
      addImage1,
      setaddImage1,
      addImage2,
      setaddImage2,
      addImage3,
      setaddImage3,
      price,
      setprice,
    } = useContext(dataContext);
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
        image1={campBarot}
        image2={campBarot1}
        image3={campBarot2}
        title={"Camping Site at Barot"}
        price={"90,000"}
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

      <Card
        image1={cottageBir}
        image2={cottageBir1}
        image3={cottageBir2}
        title={"3 BHK Cottage in Bir"}
        price={"40,000"}
      />

      <Card
        image1={homestayDalhousie}
        image2={homestayDalhousie1}
        image3={homestayDalhousie2}
        title={"6 BHK in Homestay in Dalhousie "}
        price={"75,000"}
      />

      <Card
        image1={shimlaApartment}
        image2={shimlaApartment1}
        image3={shimlaApartment2}
        title={"3 BHK in Apartment in Shimla"}
        price={"35,000"}
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

      <Card
        image1={homestay}
        image2={homestay1}
        image3={homestay2}
        title={"4 BHK Homestay in Kufri"}
        price={"60,000"}
      />

      <Card
        image1={apartmentRohru}
        image2={apartmentRohru1}
        image3={apartmentRohru2}
        title={"2 BHK Apartment at Rohru"}
        price={"25,000"}
      />

      <Card
        image1={homestayManali}
        image2={homestayManali1}
        image3={homestayManali2}
        title={"6 BHK Homestay in Manali "}
        price={"65,000"}
      />

     {addListing?<Card
        image1={URL.createObjectURL(addImage1)}
        image2={URL.createObjectURL(addImage2)}
        image3={URL.createObjectURL(addImage3)}
        title={title}
        price={price}
      />:""}
    </div>
  );
}

export default Home;
