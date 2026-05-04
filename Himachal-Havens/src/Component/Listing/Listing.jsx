import react from "react";
import "./Listing.css";
import { IoIosAddCircleOutline } from "react-icons/io";

function Listing() {
  return (
    <div id="listing">
      <form action="">
        <span id="listingtitle">Add Your Listing</span>
        <div className="list">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" required />
        </div>
        <div className="list">
          <label htmlFor="des">Description</label>
          <textarea id="des"></textarea>
        </div>
        <div className="list">
          <label htmlFor="img1">Image1</label>
          <input type="file" id="img1" required />
        </div>
        <div className="list">
          <label htmlFor="img2">Image2</label>
          <input type="file" id="img2" required />
        </div>
        <div className="list">
          <label htmlFor="img3">Image3</label>
          <input type="file" id="img3" required />
        </div>
        <div className="list">
          <label htmlFor="price">Price</label>
          <input type="text" id="price" required />
        </div>
        <div className="list">
          <label htmlFor="loc">Location</label>
          <input type="text" id="loc" />
        </div>
        <button id="listbtn">
          Add
          <IoIosAddCircleOutline />
        </button>
      </form>
    </div>
  );
}
export default Listing;
