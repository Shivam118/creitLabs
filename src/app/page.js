import React from "react";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const page = () => {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
    </main>
  );
};

export default page;
