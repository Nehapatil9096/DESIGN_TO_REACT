import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Blog = () => {
  return (
    <div className="blog-container">
      {/* Blog Header */}
      <div className="blog-header">
        <span className="blog-label">Blog</span>
        <h2 className="blog-title">Browse articles</h2>
      </div>

      {/* Article Grid */}
      <div className="article-grid">
        {/* Article 1 */}
        <article className="article-card">
          <div className="article-image-container">
            <img src="/Rectangle 1461.png" alt="Team meeting" className="article-image" />
          </div>
          <div className="article-meta">
            <span className="article-author">John Doe</span>
            <span className="article-date">Feb 23, 2024</span>
          </div>
          <h3 className="article-title">Lorem ipsum dolor sit amet consectetur.</h3>
          <a href="#" className="article-link">
            View details <span>→</span>
          </a>
        </article>

        {/* Article 2 */}
        <article className="article-card">
          <div className="article-image-container">
            <img src="/Rectangle 1461 (1).png" alt="Modern desk setup" className="article-image" />
          </div>
          <div className="article-meta">
            <span className="article-author">John Doe</span>
            <span className="article-date">Feb 23, 2024</span>
          </div>
          <h3 className="article-title">Lorem ipsum dolor sit amet consectetur.</h3>
          <a href="#" className="article-link">
            View details <span>→</span>
          </a>
        </article>

        {/* Article 3 */}
        <article className="article-card">
          <div className="article-image-container">
            <img src="/Rectangle 1461 (2).png" alt="Team discussion" className="article-image" />
          </div>
          <div className="article-meta">
            <span className="article-author">John Doe</span>
            <span className="article-date">Feb 23, 2024</span>
          </div>
          <h3 className="article-title">Lorem ipsum dolor sit amet consectetur.</h3>
          <a href="#" className="article-link">
            View details <span>→</span>
          </a>
        </article>
      </div>

      {/* Read More Button */}
      <div className="read-more-container">
        <button className="read-more-btn">
          Read more <span>→</span>
        </button>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            {/* Company Info */}
            <div className="company-info">
              <div className="company-logo">
                <img src="/navytech-logo.png" alt="Navytech" className="logo-image" />
                <span className="company-name">Navytech</span>
              </div>
              <div className="contact-info">
                <p>hello@navytech.com</p>
                <p>Phone: +01 23456789</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Testimonial</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="footer-column">
              <h3>Resources</h3>
              <ul className="footer-links">
                <li><a href="#">Support</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Subscribe */}
            <div className="footer-column">
              <h3>Subscribe</h3>
              <div className="subscribe-form">
                <input 
                  type="email" 
                  placeholder="name@domain.com" 
                  className="subscribe-input"
                />
                <button className="subscribe-btn">Send</button>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a href="#" className="social-link">
              <Facebook className="social-icon" />
            </a>
            <a href="#" className="social-link">
              <Twitter className="social-icon" />
            </a>
            <a href="#" className="social-link">
              <Instagram className="social-icon" />
            </a>
            <a href="#" className="social-link">
              <Linkedin className="social-icon" />
            </a>
            <a href="#" className="social-link">
              <Youtube className="social-icon" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;