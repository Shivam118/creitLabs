import React from "react";
import styles from "../assets/styles/serviceCards.module.css";

const ServiceCards = ({ service }) => {
  return (
    <div className={styles.serviceCards}>
      <h4 className={styles.serviceCardTitle}>{service.title}</h4>
      <ul className={styles.serviceCardList}>
        {service.services.map((item, index) => (
          <li key={index} className={styles.serviceCardListItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCards;
