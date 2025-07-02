import React, { useState } from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4b75268e-ee95-4769-a4cc-6013200a574b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />{" "}
        </h3>

        <p>
          Feel free to reach out through our contact form or find our contact
          information below. Whether you have questions, need support, or wish
          to arrange care for a loved one, we’re here for you. Your inquiries,
          feedback, and suggestions are always welcome as we strive to deliver
          compassionate and professional home care you can trust.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" /> charpepp01@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" /> +263 783 768 275
          </li>
          <li>
            <img src={location_icon} alt="" />
            1587B Chiremba Park, Hatfield, Harare, Zimbabwe
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn ">
            Submit now
            <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
