import react from "react";
import "./Contact.css";
import { TbFileLike } from "react-icons/tb";

function Contact() {
  return (
    <div id="contact">
      <form action="https://formspree.io/f/xkoyryzq" method='POST'>
        <span id="contacttitle">Contact Us</span>
        <div className="list">
          <label htmlFor="name1">UserName</label>
          <input name="username" type="text" id="name1" required />
        </div>
        <div className="list">
          <label htmlFor="email">Email</label>
          <input name="email" type="email" id="mail" required />
        </div>
        <div className="list">
          <label htmlFor="mess">Message</label>
          <textarea name="message" id="mess"></textarea>
        </div>
        <button id="contactbtn">
          Submit <TbFileLike />
        </button>
      </form>
    </div>
  );
}
export default Contact;
