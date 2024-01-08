import React from "react";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";

const page = () => {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <Services />
      <About />
    </main>
  );
};

export default page;
