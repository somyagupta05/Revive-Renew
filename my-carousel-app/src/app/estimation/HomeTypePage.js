"use client";

import styles from "./Carousel.module.css";

const HomeTypePage = () => (
  <div className={styles.pag}>
    <h1>
      What kind of home are <br />
      you renovating?
    </h1>
    <p>
      This helps us estimate details about your building <br />
      construction, such as if the walls are made of <br />
      plaster & lath.
    </p>
    <select className={styles.dropdown}>
      <option>Building Type</option>
    </select>
    <br />
    <select className={styles.dropdown}>
      <option>Building Age</option>
    </select>
    <br />
    <button className={styles.continue}>Continue</button>
  </div>
);

export default HomeTypePage;
