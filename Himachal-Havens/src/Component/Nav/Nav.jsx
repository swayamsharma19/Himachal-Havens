import React, { useState } from "react";
import "./Nav.css";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdWhatshot } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { PiFarm } from "react-icons/pi";
import { MdOutlinePool } from "react-icons/md";
import { LuTentTree } from "react-icons/lu";
import { GiWoodCabin } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaTreeCity } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  let [visible, setVisible] = useState(false);
  return (
    <div id="Nav">
      {visible ? (
        <div className="hamburger">
          <Link to={"/Login"}>
            <div className="ham1">Login</div>
          </Link>
          <Link to={"/Signup"}>
            <div className="ham1">Sign Up</div>
          </Link>
          <div className="ham1">List your Property</div>
          <div className="ham1">Help Center</div>
        </div>
      ) : (
        <div></div>
      )}

      <div className="nav1">
        <Link to={""}>
          <div className="logo">
            <img src="/logo.ico" alt="" width="50px" />
            <h1>Himachal Havens</h1>
          </div>
        </Link>

        <div className="search">
          <input type="text" placeholder="Search Destination" />
          <button>
            <span>Search</span>
            <IoSearch />
          </button>
        </div>

        <div className="ham">
          <button id="btn1">List Your Property</button>
          <button
            id="btn2"
            onClick={() => {
              setVisible((prev) => !prev);
            }}
          >
            <GiHamburgerMenu id="svg1" />
            <CgProfile id="svg2" />
          </button>
        </div>
      </div>

      <div className="nav2">
        <NavLink to={""}>
          <div className="svg11">
            <MdWhatshot />
            <h3>Trending</h3>
          </div>
        </NavLink>

        <NavLink to={"/Houses"}>
          <div className="svg11">
            <GiFamilyHouse />
            <h3>Houses</h3>
          </div>
        </NavLink>

        <NavLink to={"/Rooms"}>
          <div className="svg11">
            <MdBedroomParent />
            <h3>Rooms</h3>
          </div>
        </NavLink>

        <NavLink to={"/FarmHouses"}>
          <div className="svg11">
            <PiFarm />
            <h3>Farm Houses</h3>
          </div>
        </NavLink>

        <NavLink to={"/PoolHouses"}>
          <div className="svg11">
            <MdOutlinePool />
            <h3>Pool Houses</h3>
          </div>
        </NavLink>

        <NavLink to={"/TentHouses"}><div className="svg11">
          <LuTentTree />
          <h3>Tent Houses</h3>
        </div></NavLink>

        <div className="svg11">
          <GiWoodCabin />
          <h3>Cabins</h3>
        </div>

        <div className="svg11">
          <SiHomeassistantcommunitystore />
          <h3>Shops</h3>
        </div>

        <NavLink to={"/ForestHouses"}><div className="svg11">
          <FaTreeCity />
          <h3>Forest Houses</h3>
        </div></NavLink>
      </div>
    </div>
  );
}

export default Nav;
