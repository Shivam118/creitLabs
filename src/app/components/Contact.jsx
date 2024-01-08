"use client";
import React, { useState } from "react";
import styles from "../assets/styles/contact.module.css";

const Contact = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  return (
    <div className={styles.contact}>
      <div className={styles.contactText}>
        <h2>
          Lets Talk <span></span>
        </h2>
        <p>
          {`We're here to help you navigate the digital landscape. We'll help you
          identify the right solutions for your business, and then we'll
          implement them flawlessly.`}
          <br />
          <br />
          <span
            style={{ textDecoration: "underline" }}
          >{`Let's get started.`}</span>
        </p>
      </div>
      <div className={styles.contactFormSection}>
        <form className={styles.contactForm}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={inputData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={inputData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            value={inputData.phone}
            onChange={handleChange}
          />
          <textarea
            placeholder="Message"
            name="message"
            value={inputData.message}
            onChange={handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
