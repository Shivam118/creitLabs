import React from "react";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import OurEngineers from "./components/ourEngineers";

const page = () => {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <Services />
      <OurEngineers />
      <About />
    </main>
  );
};

export default page;
