import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './Portfolio.module.css';
import phoneCallIcon from "/ph_phone-call-light.png";
import projectLogo from "/project_logo.png";

const   Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      image: '/Frame 11.png',
      alt: 'Mobile interface'
    },
    {
      id: 2,
      image: '/Frame 13.png',
      alt: 'Laptop keyboard'
    },
    {
      id: 3,
      image: '/Frame 10.png',
      alt: 'Tablet display'
    },
    {
      id: 4,
      image: '/Frame 10 (1).png',
      alt: 'Mobile device'
    },
    {
      id: 5,
      image: '/Frame 13 (1).png',
      alt: 'Smart watch'
    },
    {
      id: 6,
      image: '/Frame 11 (1).png',
      alt: 'Digital device'
    }
  ];

  return (
    <div className={styles.portfolioSection}>
      <div className={styles.portfolioContainer}>
        <div className={styles.portfolioHeader}>
          <h3 className={styles.portfolioSubtitle}>Portfolio</h3>
          <h2 className={styles.portfolioTitle}>Our previous works</h2>
        </div>
        
        <div className={styles.portfolioGrid}>
          {portfolioItems.map((item) => (
            <div key={item.id} className={styles.portfolioItem}>
              <img src={item.image} alt={item.alt} className={styles.portfolioImage} />
            </div>
          ))}
        </div>

        <div className={styles.viewMoreContainer}>
          <button className={styles.viewMoreBtn}>
            View more
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={styles.arrowIcon}
            >
              <path d="M5 12h14m-7-7l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
