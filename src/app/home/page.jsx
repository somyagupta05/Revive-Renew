// import React from "react";
"use client";
import styles from "./HomePage.module.css";
import React, { useState } from "react";
import { FaInfoCircle, FaTools, FaUserTie, FaImages } from "react-icons/fa";
import { FaUserCircle, FaBars } from "react-icons/fa";
const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className={styles.responsiveNavbar}>
        {/* Logo */}
        <div className={styles.navLogo}>Logo</div>

        {/* Profile Menu */}
        <div className={styles.navProfileMenu}>
          <div className={styles.navProfileLogo} onClick={handleMenuToggle}>
            <FaUserCircle size={30} /> {/* Profile icon */}
          </div>

          {/* Dropdown Menu (Login) */}
          {isMenuOpen && (
            <div className={styles.navDropdownMenu}>
              <a href="/login">Login</a>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle (Hamburger) */}
        <div className={styles.mobileMenuToggle}>
          <FaBars size={30} onClick={handleMenuToggle} />
        </div>
      </nav>

      <div className={styles.container}>
        {/* Navbar */}
        <div className={styles.navbar}>
          <div className={styles.navLinks}>
            <a href="" className={styles.logo}>
              reno
            </a>
            <a href="#how-it-works">How it works</a>
            <a href="#services">Services</a>
            <a href="#contractors">Contractors</a>
            <a href="#gallery">Gallery</a>
          </div>
          <div className={styles.authLinks}>
            <a href="#login">Log in</a>
            <button className={styles.estimateButton}>Get your estimate</button>
          </div>
        </div>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1>
              Renovations <br />
              simplified.
            </h1>
            <p>
              A streamlined platform to design, plan,
              <br /> and build — all in one place
            </p>
            <button className={styles.ctaButton}>Get your estimate</button>
          </div>
          <div className={styles.heroImages}>
            <div className={styles.imageWrapper1}>
              <img src="images/kitchen.jpg" alt="Kitchen" />
            </div>
            <div className={styles.imageWrapper2}>
              <img src="images/bathroom.jpg" alt="Bathroom" />
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section className={styles.testimonials}>
          <div className={styles.testimonialItem}>
            <img
              src="images/Press01.png"
              alt="Houzz"
              className={styles.testimonialImage}
            />
            <p>"reno is here to simplify the process."</p>
          </div>
          <div className={styles.testimonialItem}>
            <img
              src="images/press02.png"
              alt="FC"
              className={styles.testimonialImage}
            />
            <p>
              "In addition to getting a contractor, you&apos;re also getting the
              eye of a design professional."
            </p>
          </div>
          <div className={styles.testimonialItem}>
            <img
              src="images/press03.png"
              alt="New York Times Post"
              className={styles.testimonialImage}
            />
            <p>
              "Streamlining timely aspects like layout, materials selection, and
              building approvals"
            </p>
          </div>
          <div className={styles.testimonialItem}>
            <img
              src="images/press04 .png"
              alt="29"
              className={styles.testimonialImage}
            />
            <p>
              "This startup is on a mission to make home renovations easier"
            </p>
          </div>
        </section>

        {/* Mobile Bottom Navbar */}
        <div className={styles.mobileBottomNav}>
          <a href="#how-it-works">
            <FaInfoCircle />
            How it works
          </a>
          <a href="#services">
            {" "}
            <FaTools />
            Services
          </a>
          <a href="#contractors">
            <FaUserTie />
            Contractors
          </a>
          <a href="#gallery">
            {" "}
            <FaImages />
            Gallery
          </a>
        </div>
      </div>
    </>
  );
};

export default HomePage;
