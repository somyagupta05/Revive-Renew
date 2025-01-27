import styles from "./option.module.css";

export default function Options() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Our Options</h1>
      <div className={styles.grid}>
        <div className={styles.card}>
          <img
            src="/images/card1.png"
            alt="Bathroom"
            className={styles.image}
          />
          <h3>Bathroom</h3>
          <p>4 WEEKS TO BUILD</p>
          <p>Build your dream bathroom with premium fixtures and finishes.</p>
          <button className={styles.button}>Learn more</button>
        </div>
        <div className={styles.card}>
          <img src="/images/card2.png" alt="Kitchen" className={styles.image} />
          <h3>Kitchen</h3>
          <p>6 WEEKS TO BUILD</p>
          <p>Create your ideal kitchen with high-quality, lasting materials.</p>
          <button className={styles.button}>Learn more</button>
        </div>
        <div className={styles.card}>
          <img
            src="/images/card3.png"
            alt="Backyard"
            className={styles.image}
          />
          <h3>Backyard</h3>
          <p>5 WEEKS TO BUILD</p>
          <p>
            Create your backyard getaway with durable materials and beautiful
            finishes.
          </p>
          <button className={styles.button}>Learn more</button>
        </div>
        <div className={styles.card}>
          <img
            src="/images/card4.png"
            alt="Basement"
            className={styles.image}
          />
          <h3>Basement</h3>
          <p>7 WEEKS TO BUILD</p>
          <p>Transform your basement into a cozy and functional space.</p>
          <button className={styles.button}>Learn more</button>
        </div>
      </div>
    </div>
  );
}
