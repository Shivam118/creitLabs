"use client";
import React from "react";
import styles from "../assets/styles/serviceCards.module.css";
import Image from "next/image";
import Link from "next/link";

const ServiceCards = ({ service }) => {
  return (
    <div className={styles.serviceCards}>
      <div className={styles.serviceCardImage}>
        <Image
          src={service.logo}
          alt={service.title}
          width={100}
          height={100}
        />
      </div>
      <h4 className={styles.serviceCardTitle}>{service.title}</h4>
      <Link href={service.link} style={{ color: "#fff" }}>
        Read More &gt;
      </Link>
    </div>
  );
};

export default ServiceCards;
