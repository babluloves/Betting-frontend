import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshTokenKey, accessTokenKey } from "../constants/storageconstants";
import { removeLocalStorage } from "../utility/storageutility";
import { setLogoutUserAct } from "../store/auth/authslice";
import { useNavigate } from 'react-router-dom';

import "../scss/Menulayout.css";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    removeLocalStorage(refreshTokenKey);
    removeLocalStorage(accessTokenKey);
    dispatch(setLogoutUserAct(undefined));
    navigate('/login');
  };

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
            <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
