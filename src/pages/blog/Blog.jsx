import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import styles from './Blog.module.css'; // Import the CSS Module
import projectLogo from "/project_logo.png";

const Blog = () => {
  return (
    <div className={styles.blogContainer}>
      {/* Blog Header */}
      <div className={styles.blogHeader}>
        <span className={styles.blogLabel}>Blog</span>
        <h2 className={styles.blogTitle}>Browse articles</h2>
      </div>

      {/* Article Grid */}
      <div className={styles.articleGrid}>
        {/* Article 1 */}
        <article className={styles.articleCard}>
          <div className={styles.articleImageContainer}>
            <img src="/Rectangle 1461.png" alt="Team meeting" className={styles.articleImage} />
          </div>
          <div className={styles.articleMeta}>
            <span className={styles.articleAuthor}>John Doe</span>
            <span className={styles.articleDate}>Feb 23, 2024</span>
          </div>
          <h3 className={styles.articleTitle}>Lorem ipsum dolor sit amet consectetur.</h3>
          <a href="#" className={styles.articleLink}>
            View details <span>→</span>
          </a>
        </article>

        {/* Article 2 */}
        <article className={styles.articleCard}>
          <div className={styles.articleImageContainer}>
            <img src="/Rectangle 1461 (1).png" alt="Modern desk setup" className={styles.articleImage} />
          </div>
          <div className={styles.articleMeta}>
            <span className={styles.articleAuthor}>John Doe</span>
            <span className={styles.articleDate}>Feb 23, 2024</span>
          </div>
          <h3 className={styles.articleTitle}>Lorem ipsum dolor sit amet consectetur.</h3>
          <a href="#" className={styles.articleLink}>
            View details <span>→</span>
          </a>
        </article>

        {/* Article 3 */}
        <article className={styles.articleCard}>
          <div className={styles.articleImageContainer}>
            <img src="/Rectangle 1461 (2).png" alt="Team discussion" className={styles.articleImage} />
          </div>
          <div className={styles.articleMeta}>
            <span className={styles.articleAuthor}>John Doe</span>
            <span className={styles.articleDate}>Feb 23, 2024</span>
          </div>
          <h3 className={styles.articleTitle}>Lorem ipsum dolor sit amet consectetur.</h3>
          <a href="#" className={styles.articleLink}>
            View details <span>→</span>
          </a>
        </article>
      </div>

      {/* Read More Button */}
      <div className={styles.readMoreContainer}>
        <button className={styles.readMoreBtn}>
          Read more <span>→</span>
        </button>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerContent}>
            {/* Company Info */}
            <div className={styles.companyInfo}>
              <div className={styles.companyLogo}>
                <img src= {projectLogo} alt="Navytech" className={styles.logoImage} />
                <span className={styles.companyName}>Navytech</span>
              </div>
              <div className={styles.contactInfo}>
                <p>hello@navytech.com</p>
                <p>Phone: +01 23456789</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.footerColumn}>
              <h3>Quick Links</h3>
              <ul className={styles.footerLinks}>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Testimonial</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div className={styles.footerColumn}>
              <h3>Resources</h3>
              <ul className={styles.footerLinks}>
                <li><a href="#">Support</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Subscribe */}
            <div className={styles.footerColumn}>
              <h3>Subscribe</h3>
              <div className={styles.subscribeForm}>
                
                <input 

                  type="email" 
                  placeholder="name@domain.com" 
                  className={styles.subscribeInput}
                />
                <button className={styles.subscribeBtn}>Send</button>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink}>
              <Facebook className={styles.socialIcon} />
            </a>
            <a href="#" className={styles.socialLink}>
              <Twitter className={styles.socialIcon} />
            </a>
            <a href="#" className={styles.socialLink}>
              <Instagram className={styles.socialIcon} />
            </a>
            <a href="#" className={styles.socialLink}>
              <Linkedin className={styles.socialIcon} />
            </a>
            <a href="#" className={styles.socialLink}>
              <Youtube className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;