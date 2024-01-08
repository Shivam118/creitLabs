import React from "react";
import styles from "../assets/styles/about.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutFormSection}>
        <form className={styles.aboutForm}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone" />
          <textarea placeholder="Message" />
          <button>Submit</button>
        </form>
      </div>
      <div className={styles.aboutText}>
        <h2>Lets Talk</h2>
        <p>
          {`We're here to help you navigate the digital landscape. We'll help you
          identify the right solutions for your business, and then we'll
          implement them flawlessly. Let's get started.`}
        </p>
      </div>
    </div>
  );
};

export default About;
