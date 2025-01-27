// RenovationTypePage.js
"use client";
import React from "react";
import styles from "./Rennovation.module.css";
import { FaBath, FaSwimmingPool, FaHammer, FaDoorOpen } from "react-icons/fa";

const RenovationTypePage = () => {
  return (
    <div className={styles.container}>
      <h2>
        What renovation would
        <br /> you like to start with?
      </h2>
      <p>
        We offer both bathroom, kitchen, backyard and <br />
        basement renovations. More can be added later to
        <br /> your project.
      </p>
      <h3>Renovation Type</h3>
      <div className={styles.options}>
        <button className={styles.option}>
          <FaBath size={32} />
          <span>Bathroom</span>
        </button>
        <button className={styles.option}>
          <FaDoorOpen size={32} />
          <span>Kitchen</span>
        </button>
        <button className={styles.option}>
          <FaSwimmingPool size={32} />
          <span>Backyard</span>
        </button>
        <button className={styles.option}>
          <FaHammer size={32} />
          <span>Basement</span>
        </button>
      </div>
    </div>
  );
};

export default RenovationTypePage;
