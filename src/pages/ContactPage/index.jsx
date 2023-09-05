import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <h1>Contact Us</h1>
        <p>If you have any questions or inquiries, feel free to get in touch with us:</p>
        <div className="contact-details">
          <div className="contact-item">
            <span>Email:</span>
            <a href="mailto:Sumanth.desinenii@gmail.com">Sumanth.desinenii@gmail.com</a>
          </div>
          <div className="contact-item">
            <span>Phone:</span>
            <a href="tel:79958 24256">79958 24256</a>
          </div>
          {/* Add more contact details if needed */}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
