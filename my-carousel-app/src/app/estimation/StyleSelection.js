// StyleSelectionPage.js
import React from "react";
import styles from "./StyleSelection.module.css";

const StyleSelectionPage = () => {
  return (
    <div className={styles.container}>
      <h2>Choose a style to start customizing.</h2>
      <p>
        This acts as a base for your palette. You can still access our entire
        design system at any point.
      </p>
      <div className={styles.styles}>
        <div className={styles.card}>
          <img src="/images/two-tone.png" alt="Two-Tone Traditional" />
          <h3>Two-Tone Traditional</h3>
          <p>
            White and gray cabinets. Bronze hardware. Charming octagon dot
            flooring.
          </p>
          <button>Select</button>
        </div>
        <div className={styles.card}>
          <img src="/images/blue-contemporary.jpg" alt="Blue Contemporary" />
          <h3>Blue Contemporary</h3>
          <p>Navy, black, and white palette. Friendly 4x4 subway tile.</p>
          <button>Select</button>
        </div>
        <div className={styles.card}>
          <img src="/images/warm-traditional.jpg" alt="Warm Traditional" />
          <h3>Warm Traditional</h3>
          <p>
            Traditional cabinet door style. Bronze hardware. 2x8 tile
            backsplash.
          </p>
          <button>Select</button>
        </div>
      </div>
    </div>
  );
};

export default StyleSelectionPage;
