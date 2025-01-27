import styles from "./finance.module.css";

export default function Finance() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <h1>
          Renovate your home as
          <br /> low as 0% APR
        </h1>
        <button className={styles.button}>Explore financing</button>
      </div>
      <img
        src="/images/finance.png" // Replace this with the correct path to your image
        alt="Background kitchen"
        className={styles.backgroundImage}
      />
    </div>
  );
}
