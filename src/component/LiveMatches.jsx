import React from 'react';
import "../scss/LiveMatches.css"

export const LiveMatches = ({ matches }) => {
  return (
    <div className="live-matches">
      <div className="match-cards">
        {matches.map((match) => (
          <div key={match.id} className="match-card">
            <h3>{match.team1} vs {match.team2}</h3>
            <p>{match.score}</p>
            <p>{match.status}</p>
            {/* Display match information */}
          </div>
        ))}
      </div>
    </div>
  );
};

