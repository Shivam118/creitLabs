"use client";
import React from "react";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import OurEngineers from "./components/ourEngineers";

const page = () => {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <Services />
      <OurEngineers />
      <Contact />
    </main>
  );
};

export default page;
