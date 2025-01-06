import React, { useState } from "react";
import "./ContactUs.css";
import CanBar from "./CanBar";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    alert("Message sent successfully!");
  };

  return (
    <div>
    <div><CanBar/></div>
    <div className="contact-us">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
    </div>
  );
};

export default ContactUs;
