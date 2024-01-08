import React from "react";
import styles from "../assets/styles/services.module.css";
import ServiceCards from "./serviceCards";

const Services = () => {
  const Services = [
    {
      title: "Digital Strategy and Design",
      services: [
        "UI/UX Consulting",
        "Technology Consulting Services",
        "Product Discovery",
      ],
    },
    {
      title: "Product Engineering",
      services: [
        "Custom Software Development",
        "Mobile Application Development",
        "Software Modernization",
        "DevOps Services",
        "Quality Engineering",
        "Software Sustenance& Support",
      ],
    },
    {
      title: "Cloud and Infrastructure",
      services: [
        "Cloud Consulting",
        "Cloud Migration",
        "Cloud-Native Development",
        "Cloud Managed Services",
        "Cloud Security",
        "Cloud Infrastructure Services",
      ],
    },
    {
      title: "Intelligence Automation",
      services: [
        "AI Consulting",
        "Machine Learning",
        "Natural Language Processing",
        "Robotic Process Automation",
        "Data Science",
        "Computer Vision",
      ],
    },
    {
      title: "Application Security",
      services: [
        "Application Security Testing",
        "Application Security Consulting",
        "Application Security Training",
        "Application Security Managed Services",
        "Application Security Architecture Review",
        "Application Security Code Review",
      ],
    },
    {
      title: "Blockchain Development",
      services: [
        "Blockchain Consulting",
        "Blockchain Development",
        "Blockchain Testing",
        "Blockchain Security",
        "Blockchain Training",
        "Blockchain Managed Services",
      ],
    },
  ];
  return (
    <div className={styles.services}>
      {Services.map((service) => (
        <ServiceCards service={service} key={service.title} />
      ))}
    </div>
  );
};

export default Services;
