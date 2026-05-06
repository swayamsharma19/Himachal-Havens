import React, { useContext, useEffect, useState } from "react";
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

// Maps backend title → local images (since images stay local)
const imageMap = {
  "2 BHK Apartment in Manali":    [house, house1, house2],
  "Camping Site at Barot":        [campBarot, campBarot1, campBarot2],
  "5 BHK Villa in Kasauli":       [villa, villa1, villa2],
  "4 BHK Cottage in Jibhi":       [cottage, cottage1, cottage2],
  "3 BHK Cottage in Bir":         [cottageBir, cottageBir1, cottageBir2],
  "6 BHK Homestay in Dalhousie":  [homestayDalhousie, homestayDalhousie1, homestayDalhousie2],
  "3 BHK Apartment in Shimla":    [shimlaApartment, shimlaApartment1, shimlaApartment2],
  "Camping Site at Kasol":        [campKasol, campKasol1, campKasol2],
  "Camping Site at Tosh":         [campTosh, campTosh2, campTosh1],
  "4 BHK Homestay in Kufri":      [homestay, homestay1, homestay2],
  "2 BHK Apartment at Rohru":     [apartmentRohru, apartmentRohru1, apartmentRohru2],
  "6 BHK Homestay in Manali":     [homestayManali, homestayManali1, homestayManali2],
};

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

  // ── NEW: fetch destinations from backend ──
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/destinations")
      .then((res) => res.json())
      .then((data) => setDestinations(data))
      .catch((err) => console.error("Failed to fetch destinations:", err));
  }, []);
  // ─────────────────────────────────────────

  return (
    <div id="home">
      {destinations.map((dest) => {
        const images = imageMap[dest.title];
        if (!images) return null;
        return (
          <Card
            key={dest.id}
            image1={images[0]}
            image2={images[1]}
            image3={images[2]}
            title={dest.title}
            price={dest.price}
          />
        );
      })}

      {addListing ? (
        <Card
          image1={URL.createObjectURL(addImage1)}
          image2={URL.createObjectURL(addImage2)}
          image3={URL.createObjectURL(addImage3)}
          title={title}
          price={price}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Home;
