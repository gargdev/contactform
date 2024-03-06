import React, { useState } from "react";
import "../Styles/ContactForm.css";
import shape from "../assets/shape.png";
import email from "../assets/email.png";
import phone from "../assets/phone.png";
import location from "../assets/location.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error for the field being edited
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/gargdev/google_sheets/RCqSniJaFmoEOjqL?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [
              formData.name,
              formData.email,
              formData.phone,
              formData.message,
              new Date().toLocaleString(),
            ],
          ]),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Clear the form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      alert("Form submitted successfully!");
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Error submitting form. Please try again later.");
    }
  };

  const handleFocus = (e) => {
    e.target.parentNode.classList.add("focus");
  };

  const handleBlur = (e) => {
    if (e.target.value === "") {
      e.target.parentNode.classList.remove("focus");
    }
  };

  return (
    <div className="container">
      <span class="big-circle"></span>
      <img src={shape} class="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>
          <div className="info">
            <div className="information">
              <img src={location} className="icon" alt="" />
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className="information">
              <img src={email} className="icon" alt="" />
              <p>lorem@ipsum.com</p>
            </div>
            <div className="information">
              <img src={phone} className="icon" alt="" />
              <p>123-456-789</p>
            </div>
          </div>
          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="/">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="/">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>
          <form onSubmit={handleSubmit} autoComplete="off">
            <h3 className="title">Contact US</h3>
            <div className="input-container">
              <input
                type="text"
                name="name"
                className="input"
                value={formData.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              />
              {errors.name && (
                <wrap className="error-message">{errors.name}</wrap>
              )}
              <label for="">Username</label>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input
                type="email"
                name="email"
                className="input"
                value={formData.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              />
              {errors.email && (
                <wrap className="error-message">{errors.email}</wrap>
              )}
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input
                type="tel"
                name="phone"
                className="input"
                value={formData.phone}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              />
              {errors.phone && (
                <wrap className="error-message">{errors.phone}</wrap>
              )}
              <label for="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea
                name="message"
                className="input"
                value={formData.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              ></textarea>
              {errors.message && (
                <wrap className="error-message">{errors.message}</wrap>
              )}
              <label for="">Message</label>
              <span>Message</span>
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
