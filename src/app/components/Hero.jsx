import React from "react";
import styles from "../assets/styles/hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h1>
          <span>Elevate Your Vision:</span> Where Cutting-Edge Development Meets
          Unparalleled Innovation
        </h1>
        <p className={styles.heroDesc}>
          {`We fuse cutting-edge Full-Stack Development, Blockchain expertise, and
          app mastery to elevate your business. At CreIT Labs, we're
          architects of digital transformation, crafting solutions that redefine
          industries`}
        </p>
        <button className={styles.heroBtn}>Schedule a Call</button>
      </div>
    </div>
  );
};

export default Hero;
