
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Contact:"",
    message: "",

  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    setSuccess(true);

    setFormData({ name: "", email: "",contact:"", message: "" });

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="con">
    <section className="contact-section">
      <h2 className="title">Contact Us</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
         <input
          type="Number"
          name="Contact"
          placeholder="Mobile number"
          value={formData.Contact}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Write your message..."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>

        {success && <p className="success">Message Sent Successfully ✔</p>}
      </form>
    </section>
    </div>   

  );
};

export default Contact;
