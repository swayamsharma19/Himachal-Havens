const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());


const inquiries = [];
const userListings = [];


const destinations = [
  { id: 1,  title: "2 BHK Apartment in Manali",     price: "10,000", type: "Apartment" },
  { id: 2,  title: "Camping Site at Barot",          price: "90,000", type: "Camping"   },
  { id: 3,  title: "5 BHK Villa in Kasauli",         price: "60,000", type: "Villa"     },
  { id: 4,  title: "4 BHK Cottage in Jibhi",         price: "50,000", type: "Cottage"   },
  { id: 5,  title: "3 BHK Cottage in Bir",           price: "40,000", type: "Cottage"   },
  { id: 6,  title: "6 BHK Homestay in Dalhousie",    price: "75,000", type: "Homestay"  },
  { id: 7,  title: "3 BHK Apartment in Shimla",      price: "35,000", type: "Apartment" },
  { id: 8,  title: "Camping Site at Kasol",          price: "70,000", type: "Camping"   },
  { id: 9,  title: "Camping Site at Tosh",           price: "50,000", type: "Camping"   },
  { id: 10, title: "4 BHK Homestay in Kufri",        price: "60,000", type: "Homestay"  },
  { id: 11, title: "2 BHK Apartment at Rohru",       price: "25,000", type: "Apartment" },
  { id: 12, title: "6 BHK Homestay in Manali",       price: "65,000", type: "Homestay"  },
];


app.get("/api/destinations", (req, res) => {
  res.json(destinations);
});


app.get("/api/destinations/search", (req, res) => {
  const query = req.query.q?.toLowerCase() || "";
  const results = destinations.filter((d) =>
    d.title.toLowerCase().includes(query)
  );
  res.json(results);
});


app.post("/api/contact", (req, res) => {
  const { username, email, message } = req.body;
  if (!username || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }
  const inquiry = { username, email, message, date: new Date() };
  inquiries.push(inquiry);
  console.log("📩 New Contact Inquiry:", inquiry);
  res.json({ success: true, message: "Message received successfully!" });
});


app.post("/api/listings", (req, res) => {
  const { title, price, location, description } = req.body;
  if (!title || !price) {
    return res.status(400).json({ error: "Title and price are required." });
  }
  const listing = { title, price, location, description, date: new Date() };
  userListings.push(listing);
  console.log("🏠 New Listing Added:", listing);
  res.json({ success: true, message: "Listing added successfully!" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
