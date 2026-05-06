import react, { useState } from "react";
import "./Contact.css";
import { TbFileLike } from "react-icons/tb";

function Contact() {
  
  const [formData, setFormData] = useState({ username: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("Message sent successfully! ✅");
        setFormData({ username: "", email: "", message: "" });
      } else {
        setStatus("Failed to send. Please try again.");
      }
    } catch (err) {
      setStatus("Server error. Please try again.");
    }
  };


  return (
    <div id="contact">
      <form onSubmit={handleSubmit}>
        <span id="contacttitle">Contact Us</span>
        <div className="list">
          <label htmlFor="name1">UserName</label>
          <input
            name="username"
            type="text"
            id="name1"
            required
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
        </div>
        <div className="list">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            id="mail"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className="list">
          <label htmlFor="mess">Message</label>
          <textarea
            name="message"
            id="mess"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
        </div>
        
        {status && <p style={{ color: "green", fontWeight: "bold" }}>{status}</p>}
        <button id="contactbtn">
          Submit <TbFileLike />
        </button>
      </form>
    </div>
  );
}

export default Contact;
