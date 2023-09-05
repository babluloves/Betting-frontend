import React from 'react';
import { Link } from 'react-router-dom';
import "../scss/Menulayout.css";

export const Header = () => {
  return (
    <div className="home-page">
      <header className="header">
        <nav className="nav-bar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/prediction">Predictions</Link></li>
            <li><Link to="/result">Results</Link></li>
            <li><a href="https://youtube.com/@NaniCricketPredictions?si=d7A_d5MNReIWpsca">Blog</a></li>
            <li><a href="/about">About</a></li>
            <li> <Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
