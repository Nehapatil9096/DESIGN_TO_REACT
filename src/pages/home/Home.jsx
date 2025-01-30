import React, { useState, useEffect, useRef } from "react";
import styles from "./Home.module.css";
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios'; // Import axios
import projectLogo from "/project_logo.png";
import Rectangle from "/Rectangle 1.png"; // Update the path accordingly
import Amazon from "/Amazon.png"; // Update the path accordingly
import Canva from "/Canva.png"; // Update the path accordingly
import Google from "/Google.png"; // Update the path accordingly
import Sketch from "/Sketch.png"; // Update the path accordingly

import { FaSearch } from "react-icons/fa";
import { FaPhone } from 'react-icons/fa';
import phoneCallIcon from "/ph_phone-call-light.png";



const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.navLeft}>
          <img src={projectLogo} alt="Logo" className={styles.logo} />
          <Link to="/services">Services</Link>
          <Link to="/Portfolio">Portfolio</Link>
          <Link to="/about">About us</Link>
          <Link to="/Testimonials">Testimonial</Link>
        </div>
        <button className={styles.talkButton}>
        <FaPhone className={styles.phoneIcon} />
          Talk to us
        </button>
      </nav>

      <main className={styles.heroSection}>
        <div className={styles.contentLeft}>
          <h1 className={styles.title}>
            #1 Worldwide<br />
            Digital Solution<br />
            Agency
          </h1>
          <p className={styles.description}>
            Revolutionize your global digital strategy with the #1 Worldwide 
            Digital Solution Agency, pioneering innovative solutions for 
            unparalleled success.
          </p>
          <button className={styles.bookCallButton}>
            <FaPhone className={styles.phoneIcon} />
            Book a call
          </button>
          
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <h2>75K+</h2>
              <p>Project Completed</p>
            </div>
            <div className={styles.statItem}>
              <h2>20+</h2>
              <p>Years of Experience</p>
            </div>
            <div className={styles.statItem}>
              <h2>400+</h2>
              <p>Clients Worldwide</p>
            </div>
          </div>
        </div>
        
        <div className={styles.imageContainer}>
          <img src={Rectangle} alt="Digital Solutions" className={styles.heroImage} />
        </div>
      </main>

      <section className={styles.trustedSection}>
  <div className={styles.trustedContent}>
    <div className={styles.logoGrid}>
      <div className={styles.logoGrido}>
      <h3 className={styles.trustedTitle}>Trusted by</h3>
      <h2 className={styles.trustedSubtitle}>Top Companies</h2>
      </div>
      <div className={styles.logoContainer}>
        <img src={Google} alt="Google" />
        <img src={Canva} alt="Canva" />
        <img src={Amazon} alt="Amazon" />
        <img src={Sketch} alt="Sketch" />
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;