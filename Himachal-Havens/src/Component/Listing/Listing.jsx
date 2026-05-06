import react, { useContext } from "react";
import "./Listing.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { dataContext } from "../../Context/Usercontext";

function Listing() {
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

 
  const [location, setLocation] = react.useState("");
  const [description, setDescription] = react.useState("");
  

  return (
    <div id="listing">
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          
          try {
            const res = await fetch("http://localhost:5000/api/listings", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ title, price, location, description }),
            });
            const data = await res.json();
            if (data.success) {
              alert("Added Listing Successfully....👍");
              setaddListing(true);
            } else {
              alert("Failed to add listing. Please try again.");
            }
          } catch (err) {
            alert("Server error. Please try again.");
          }
          
        }}
      >
        <span id="listingtitle">Add Your Listing</span>

        <div className="list">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div className="list">
          <label htmlFor="des">Description</label>
          
          <textarea
            id="des"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="list">
          <label htmlFor="img1">Image1</label>
          <input
            type="file"
            id="img1"
            required
            onChange={(e) => setaddImage1(e.target.files[0])}
          />
        </div>

        <div className="list">
          <label htmlFor="img2">Image2</label>
          <input
            type="file"
            id="img2"
            required
            onChange={(e) => setaddImage2(e.target.files[0])}
          />
        </div>

        <div className="list">
          <label htmlFor="img3">Image3</label>
          <input
            type="file"
            id="img3"
            required
            onChange={(e) => setaddImage3(e.target.files[0])}
          />
        </div>

        <div className="list">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            required
            onChange={(e) => setprice(e.target.value)}
            value={price}
          />
        </div>

        <div className="list">
          <label htmlFor="loc">Location</label>
          
          <input
            type="text"
            id="loc"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
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
