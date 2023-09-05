import React, { useState, useEffect } from "react";
import { LiveMatches } from "../../component/LiveMatches";
import "./Dashboard.css";
import Banner from "../../assets/HomepageImg.webp";

export default function Dashboard() {
  const [liveMatches, setLiveMatches] = useState([]);

  useEffect(() => {
    // Fetch live matches
    // Update liveMatches state

    // Fetch news articles
    // Update news state
  }, []);

  const handleBannerClick = () => {
    // Redirect to another website
    window.location.href = "https://www.icc-cricket.com/news/3661049";
  };

  const liveMatche = [
    // ... other live match data
  ];

  return (
    <div className="page-content slide bannerBg1"> 
      <div className="dashboard-banner" onClick={handleBannerClick}>
        <img src={Banner} alt="Dashboard Banner" />
        <div className="banner-text">
          <h2>Babar Azam reacts to Virat Kohli's comments</h2>
          <p>Asia Cup</p>
        </div>
      </div>
      <div className="live-matches">
        

        </div>
      </div>
  );
}
