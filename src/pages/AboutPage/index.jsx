import React from 'react';
import './AboutPage.css';
import teammember1 from "../../assets/user-img.png";
import teammember2 from "../../assets/default-user-img.png";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About Us</h1>
        <p>Welcome to our project! We are dedicated to...</p>
        <p>Our mission is to...</p>
        <p>Founded in 2020, we have been...</p>
      </div>
      <div className="team-members">
        <h2>Meet the Team</h2>
        <div className="member">
          <img src={teammember1} alt="Team Member 1" />
          <h3>John Doe</h3>
          <p>Co-founder & Developer</p>
        </div>
        <div className="member">
          <img src={teammember2} alt="Team Member 2" />
          <h3>Jane Smith</h3>
          <p>Designer</p>
        </div>
        {/* Add more team members */}
      </div>
    </div>
  );
};

export default AboutPage;
