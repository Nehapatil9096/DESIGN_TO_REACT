import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "/src/pages/services/Services.module.css";
import phoneCallIcon from "/ph_phone-call-light.png";
import projectLogo from "/project_logo.png";
import { useParams, useNavigate } from 'react-router-dom';
import { BsBrush } from 'react-icons/bs';
import { BiGlobe, BiMobile } from 'react-icons/bi';
import { AiOutlineLineChart } from 'react-icons/ai';
import { HiOutlineArrowRight } from 'react-icons/hi';

const Services = () => {
  const services = [
    {
      icon: <img src="/PaintBrush.png" className={styles.serviceIcon} />,
      title: "Branding and UI/UX",
      description: "Lorem ipsum dolor sit amet consectetur. Quam diam augue lectus vivamus metus",
    },
    {
      icon: <img src="/earth.png" className={styles.serviceIcon} />,
      title: "Web Development",
      description: "Lorem ipsum dolor sit amet consectetur. Quam diam augue lectus vivamus metus",
    },
    {
      icon: <img src="/DeviceMobile.png" className={styles.serviceIcon} />,
      title: "Mobile Development",
      description: "Lorem ipsum dolor sit amet consectetur. Quam diam augue lectus vivamus metus",
    },
    {
      icon: <img src="/CreditCard.png" className={styles.serviceIcon} />,
      title: "Digital Marketing",
      description: "Lorem ipsum dolor sit amet consectetur. Quam diam augue lectus vivamus metus",
    },
  ];


  return (
    <div className={styles.servicesContainer}>
    <div className={styles.headerSection}>
      <h3 className={styles.subtitle}>Our services</h3>
      <h2 className={styles.title}>Growth based services</h2>
    </div>
    
    <div className={styles.servicesGrid}>
      {services.map((service, index) => (
        <div 
          key={index} 
          className={`${styles.serviceCard} ${index === 0 ? styles.activeCard : ''}`}
        >
          <div className={styles.iconWrapper}>
            {service.icon}
          </div>
          <h3 className={styles.cardTitle}>{service.title}</h3>
          <p className={styles.cardDescription}>{service.description}</p>
          <button className={styles.viewDetailsButton}>
            View details
            <HiOutlineArrowRight className={styles.arrowIcon} />
          </button>
        </div>
      ))}
    </div>

    <div className={styles.pagination}>
      <button className={styles.paginationButton}>
        <HiOutlineArrowRight className={`${styles.arrowIcon} ${styles.prevArrow}`} />
      </button>
      <span className={styles.paginationText}>1/3</span>
      <button className={styles.paginationButton}>
        <HiOutlineArrowRight className={styles.arrowIcon} />
      </button>
    </div>
  </div>
);
};


export default Services;
