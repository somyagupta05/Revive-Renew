"use client";

import { useState } from "react";
import WelcomPage from "./WelcomPage";
import LocationPage from "./LocationPage";
import HomeTypePage from "./HomeTypePage";
import RennovationPage from "./Rennovation";
import Kitchen from "./Kitchen";
import Style from "./StyleSelection";
import styles from "./Carousel.module.css";

const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    <WelcomPage />,
    <LocationPage />,
    <HomeTypePage />,
    <RennovationPage />,
    <Kitchen />,
    <Style />,
  ];

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % pages.length);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.arrow} onClick={handlePrev}>
        &lt;
      </button>
      <div className={styles.pageContainer}>{pages[currentPage]}</div>
      <button className={styles.arrow} onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
