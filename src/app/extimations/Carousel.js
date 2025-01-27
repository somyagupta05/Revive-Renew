// src/components/Carousel.js
import { useState } from "react";
import styles from "./Carousel.module.css"; // Make sure this path matches your project structure

const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      title: "Welcome to Reno’s planner.",
      description:
        "In less than 2 minutes, start your design process and get a starting estimate for your project.",
      steps: [
        "Customize your project",
        "Chat with a planner",
        "Receive a personalized proposal",
      ],
      button: "Get started",
    },
    {
      title: "Hi there, let's start with the basics. Where are you renovating?",
      description:
        "With Reno, gain access to local renovation expertise. Reserve today for our chance to get accepted.",
      inputPlaceholder: "Postal Code",
    },
    {
      title: "What kind of home are you renovating?",
      description:
        "This helps us estimate details about your building construction, such as if the walls are made of plaster & lath.",
      dropdownOptions: ["Building Type", "Building Age"],
    },
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
      <div className={styles.page}>
        <h1>{pages[currentPage].title}</h1>
        <p>{pages[currentPage].description}</p>
        {currentPage === 0 && (
          <div>
            {pages[currentPage].steps.map((step, index) => (
              <p key={index} className={styles.step}>
                {index + 1}. {step}
              </p>
            ))}
            <button className={styles.getStarted}>
              {pages[currentPage].button}
            </button>
          </div>
        )}
        {currentPage === 1 && (
          <div>
            <input
              type="text"
              placeholder={pages[currentPage].inputPlaceholder}
              className={styles.input}
            />
            <button className={styles.continue}>Continue</button>
          </div>
        )}
        {currentPage === 2 && (
          <div>
            {pages[currentPage].dropdownOptions.map((option, index) => (
              <select key={index} className={styles.dropdown}>
                <option>{option}</option>
              </select>
            ))}
            <button className={styles.continue}>Continue</button>
          </div>
        )}
      </div>
      <button className={styles.arrow} onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
