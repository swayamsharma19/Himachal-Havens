import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./Component/Home/Home.jsx";
import Login from "./Component/Login/Login.jsx";
import Signup from "./Component/Signup/Signup.jsx";
import Houses from "./Component/Houses/Houses.jsx";
import Rooms from "./Component/Rooms/Rooms.jsx";
import FarmHouses from "./Component/FarmHouses/FarmHouses.jsx";
import PoolHouses from "./Component/PoolHouses/PoolHouses.jsx";
import TentHouses from "./Component/TentHouses/TentHouses.jsx";
import ForestHouses from "./Component/ForestHouses/ForestHouses.jsx";
import Listing from "./Component/Listing/Listing.jsx";
import Usercontext from "./Context/Usercontext.jsx";
import Contact from "./Component/Contactus/Contact.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="Login" element={<Login />} />
      <Route path="Signup" element={<Signup />} />
      <Route path="Houses" element={<Houses />} />
      <Route path="Rooms" element={<Rooms />} />
      <Route path="FarmHouses" element={<FarmHouses />} />
      <Route path="PoolHouses" element={<PoolHouses />} />
      <Route path="TentHouses" element={<TentHouses />} />
      <Route path="ForestHouses" element={<ForestHouses />} />
      <Route path="Listing" element={<Listing />} />
      <Route path="Contact" element={<Contact />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Usercontext>
      <RouterProvider router={router} />
    </Usercontext>
  </React.StrictMode>,
);
