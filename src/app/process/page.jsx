import React from "react";

import styles from "./process.module.css";
const ProcessPage = () => {
  return (
    <>
      <div className={styles.process}>
        <div className={styles.container}>
          <div className={styles.content1}>
            A simple and streamlined process
          </div>
          <div className={styles.content2}>
            Use our tools to plan, design, and build your <br />
            renovation with the industry&apos; s top designers and <br />
            contractors.
            <div className={styles.works}>
              <u>How does it works?</u>
            </div>
          </div>
        </div>
        <div className={styles.photos}>
          <div className={styles.photoItem}>
            <img className={styles.img11} src="images/Process 01.png" />
            <div className={styles.plan1}>
              <h1>Plan</h1>
              <p>
                Work with a Block Project Planner to receive a custom proposal
                tailored to your renovation goals with a detailed scope of work.
              </p>
            </div>
          </div>

          <div className={styles.photoItem}>
            <img className={styles.img1} src="images/Process 02.png" />
            <div className={styles.plan2}>
              <h1>Plan</h1>
              <p>
                Use our curated design system and access our in-house designers
                to bring your space to life. We&apos;ll order the materials and
                prepare your renovation for the day of break ground.
              </p>
            </div>
          </div>

          <div className={styles.photoItem}>
            <img className={styles.img1} src="images/Process 03.png" />
            <div className={styles.plan3}>
              <h1>Plan</h1>
              <p>
                We&apos;ve built relationships with the best local contractors
                in your area. They&apos;re 100% licensed and insured and will
                provide milestone updates throughout the build.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.process2}>
          <div className={styles.p1}>
            <img src="images/p1.png" />
          </div>

          <div className={styles.cont}>
            {/* <br></br>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br /> */}

            <p className={styles.para1}>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <br />
              Reno matched me to a great contractor who was able to renovate my
              kitchen while I lived at home during the pandemic.
            </p>
            <p className={styles.para2}>— Linda R. </p>
            <span className={styles.arrow1}>&#8592;</span>
            <span className={styles.arrow}>&#8594;</span>
          </div>
        </div>
        <div className={styles.butt}>
          <button>Get your estimate</button>
        </div>
      </div>
    </>
  );
};
export default ProcessPage;
