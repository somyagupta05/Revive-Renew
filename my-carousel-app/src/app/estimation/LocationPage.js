"use client";

import styles from "./Carousel.module.css";

const LocationPage = () => (
  <div className={styles.pagess}>
    <h1>
      Hi there, let's start with <br />
      the basics. Where are <br />
      you renovating?
    </h1>

    <p>
      With Reno, gain access to local renovation <br />
      expertise. Reserve today for our chance to get <br />
      accepted.
    </p>
    <input type="text" placeholder="Postal Code" className={styles.input} />
    <br />
    <button className={styles.continue}>Continue</button>
  </div>
);

export default LocationPage;
