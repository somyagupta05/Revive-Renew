import React from "react";
import styles from "./footer.module.css";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>
          Let&apos;s work on your
          <br /> project together!
        </h1>
        <button className={styles.scheduleButton}>Schedule a call</button>

        <div className={styles.email}>hello@reno.com</div>
      </header>

      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.column}>
            <p className={styles.columnTitle}>
              We&apos;re redefining what it means to renovate.
            </p>
          </div>
          <div className={styles.column}>
            <hr className={styles.columnTitle} />
            <p className={styles.columnText}>
              Reno simplifies the chaos and costs of construction by bringing
              design, sourcing, and vetted contractors all under one roof.
            </p>
            <p className={styles.para}>© Reno 2021</p>
          </div>

          <div className={styles.column}>
            <hr className={styles.columnTitle} />

            <ul className={styles.columnList}>
              <li className={styles.columnListItem}>Bathrooms</li>
              <li className={styles.columnListItem}>Kitchens</li>
              <li className={styles.columnListItem}>Backyards</li>
              <li className={styles.columnListItem}>Basements</li>
              <li className={styles.columnListItem}>How it works</li>
              <li className={styles.columnListItem}>Gallery</li>
              <li className={styles.columnListItem}>FAQ</li>
              <li className={styles.columnListItem}>Guides</li>
            </ul>
          </div>

          <div className={styles.column}>
            <hr className={styles.columnTitle} />

            <p className={styles.columnTextt}>1 800 234 3432</p>
            <p className={styles.columnTextt}>hello@reno.com</p>
          </div>

          <div className={`${styles.column} ${styles.legalLinks}`}>
            <hr className={styles.columnTitle} />

            <ul className={styles.columnList}>
              <li className={styles.columnListItem}>Terms of Use</li>
              <li className={styles.columnListItem}>Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div className={styles.renoText}>reno</div>
      </footer>
    </div>
  );
}
