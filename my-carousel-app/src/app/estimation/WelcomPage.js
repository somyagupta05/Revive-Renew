"use client";

import styles from "./Carousel.module.css";

const WelcomePage = () => (
  <div className={styles.page}>
    <div className={styles.textContainer}>
      <h1>
        Welcome to Reno&apos;s <br />
        planner.
      </h1>
      <p>
        In less than 2 minutes, start your design process <br />
        and get a starting estimate for your project.
      </p>
      <div className={styles.steps}>
        <p className={styles.step}>1. Customize your project</p>
        <p className={styles.step}>2. Chat with a planner</p>
        <p className={styles.step}>3. Receive a personalized proposal</p>
        <button className={styles.getStarted}>Get started</button>
      </div>
    </div>
    <div className={styles.imageContainer}>
      <img
        src="/images/kitchen.jpg"
        alt="Kitchen Design"
        className={styles.image}
      />
      <img
        src="/images/bathroom.jpg"
        alt="Bathroom Design"
        className={styles.imageOverlay}
      />
    </div>
  </div>
);

export default WelcomePage;
