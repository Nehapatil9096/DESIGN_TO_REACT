import React from 'react';
import styles from './About.module.css'; // Import the CSS module
import projectLogo from "/project_logo.png";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutTitle}>
        <h5 className={styles.subTitle}>About us</h5>
        <h2 className={styles.mainTitle}>Why we are best</h2>
      </div>

      <div className={styles.aboutContent}>
        <div className={styles.aboutLeft}>
          <div className={styles.imgSmall}>
            <img src="Frame 48095522.png" alt="meeting" className={styles.smallImage} />
            <img src="Frame 10 (2).png" alt="meeting" className={styles.smallImage1} />
          </div>
          <div className={styles.imgLarge}>
            <img src="Frame 10 (3).png" alt="meeting" className={styles.largeImage} />
          </div>
        </div>

        <div className={styles.aboutRight}>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit 
          dolor finibus viverra lectus amet. Integer sed pretium odio 
          lectus at malesuada sed eget nunc. Viverra malesuada viverra id
        </p>
        <h3 className={styles.featureTitle}>Our Vision</h3>

          <div className={styles.featureBox}>
            <div className={styles.iconWrapper}>
              <img src="Eye.png" alt="meeting"  className="fa-regular fa-eye"/>
            </div>
            <p className={styles.featureText}>Lorem ipsum dolor sit amet consectetur. Ut elementum 
            ac eget id et at dui arcu.</p>
          </div>

            <h3 className={styles.featureTitle}>Our Mission</h3>
          <div className={styles.featureBox}>
            <div className={styles.iconWrapper}>
            <img src="Target.png" alt="meeting"className="fa-regular fa-circle-check"/>
            </div>
            <p className={styles.featureText}>Lorem ipsum dolor sit amet consectetur. Quam arcu 
habitasse fusce pharetra.</p>
          </div>
        </div>
      </div>

      <button className={styles.button}>
        Read more   →
      </button>
    </div>
  );
};
export default About;
