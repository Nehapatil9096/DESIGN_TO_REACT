import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaRegStar } from 'react-icons/fa';
import phoneCallIcon from "/ph_phone-call-light.png";
import projectLogo from "/project_logo.png";
import { Link } from "react-router-dom";
import axios from 'axios';
import styles from './Testimonials.module.css';


const ProductDetailPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fingillia volutpat lectus amet. Integer sed pretium odio lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel tortor dui adipiscing.",
      name: "Michael Wong",
      image: "/Ellipse 1.png",
      rating: 5
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fingillia volutpat lectus amet. Integer sed pretium odio lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel tortor dui adipiscing.",
      name: "Avril Song",
      image: "/Ellipse 1 (1).png",
      rating: 4
    }
  ];

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span 
        key={index} 
        className={`${styles.star} ${index < rating ? styles.starFilled : ''}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className={styles.testimonialSection}>
      <div className={styles.testimonialHeader}>
        <h4>Testimonial</h4>
        <h2>What our clients say</h2>
      </div>

      <div className={styles.testimonialContainer}>
        {testimonials.map((testimonial, index) => (
          <div 
            key={testimonial.id}
            className={`${styles.testimonialCard} ${currentSlide === index ? styles.active : ''}`}
          >
<div className={styles.quoteIcon}>
  <img src="/Quotes.png" alt="quote" className={styles.quoteImage} />
</div>
            <p className={styles.testimonialText}>{testimonial.text}</p>
            <div className={styles.testimonialAuthor}>
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className={styles.authorImage}
              />
              <div className={styles.authorInfo}>
                <h3 className={styles.authorName}>{testimonial.name}</h3>
                <div className={styles.rating}>
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.dotIndicators}>
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ''}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
export default ProductDetailPage;
