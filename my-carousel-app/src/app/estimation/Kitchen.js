// KitchenGoalsPage.js
import React from "react";
import styles from "./Kitchen.module.css";

const KitchenGoalsPage = () => {
  return (
    <div className={styles.container}>
      <h2>
        What goals do you have
        <br /> for your kitchen?
      </h2>
      <br />
      <p>Select all that apply.</p>
      <br />
      <p>Kitchen Goals</p>
      <div className={styles.goals}>
        <label>
          <input type="checkbox" /> Improve the layout
        </label>
        <label>
          <input type="checkbox" /> Refresh the look
        </label>
        <label>
          <input type="checkbox" /> Upgrade appliances
        </label>
        <label>
          <input type="checkbox" /> Something else
        </label>
      </div>
      <button className={styles.continueButton}>Continue</button>
    </div>
  );
};

export default KitchenGoalsPage;
