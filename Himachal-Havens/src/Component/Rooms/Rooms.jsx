import react from 'react'
import "./Rooms.css"
import Card from "../Card/Card";
import house from "../../assets/House.jpg";
import house1 from "../../assets/HouseRoom.jpg";
import house2 from "../../assets/HouseGarden.jpg";
import villa from "../../assets/villa.jpg";
import villa1 from "../../assets/villaRoom.jpg";
import villa2 from "../../assets/villaDine.jpg";
import shimlaApartment from "../../assets/shimlaApartment.jpg";
import shimlaApartment1 from "../../assets/shimlaApartmentRoom.jpg";
import shimlaApartment2 from "../../assets/ApartmentRoom.jpg";
import apartmentRohru from "../../assets/apartmentRohru.jpg";
import apartmentRohru1 from "../../assets/rohruRoom.jpg";
import apartmentRohru2 from "../../assets/rohruRoom2.jpg";

function Rooms(){
    return (
    <div id='houses'>
        <Card
        image1={house}
        image2={house1}
        image3={house2}
        title={"2 BHK Apartment in Manali"}
        price={"10,000"}
      />

       <Card
        image1={villa}
        image2={villa1}
        image3={villa2}
        title={"5 BHK Villa in Kasauli"}
        price={"60,000"}
      />

        <Card
        image1={shimlaApartment}
        image2={shimlaApartment1}
        image3={shimlaApartment2}
        title={"3 BHK in apartment in Shimla"}
        price={"35,000"}
      />


       <Card
        image1={apartmentRohru}
        image2={apartmentRohru1}
        image3={apartmentRohru2}
        title={"2 BHK Apartment at Rohru"}
        price={"25,000"}
      />

    </div>
    )
}

export default Rooms