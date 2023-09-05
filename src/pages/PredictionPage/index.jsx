import React from 'react';
import PredictionCard from '../../component/PredectionCard';
import './Prediction.css';
import { Header } from '../../component';

const matchesData = [
  {
    id: 1,
    title: 'INDIA vs PAKSTIAN',
    date: '2023-09-01',
    // Add other match details
  },
  {
    id: 2,
    title: 'AUSTRILA VS BANGLADESH',
    date: '2023-09-02',
    // Add other match details
  },
  {
    id: 2,
    title: 'AUSTRILA VS BANGLADESH',
    date: '2023-09-02',
    // Add other match details
  },
  {
    id: 2,
    title: 'AUSTRILA VS BANGLADESH',
    date: '2023-09-02',
    // Add other match details
  },
  {
    id: 2,
    title: 'AUSTRILA VS BANGLADESH',
    date: '2023-09-02',
    // Add other match details
  },
  {
    id: 2,
    title: 'AUSTRILA VS BANGLADESH',
    date: '2023-09-02',
    // Add other match details
  },
  {
    id: 2,
    title: 'AUSTRILA VS BANGLADESH',
    date: '2023-09-02',
    // Add other match details
  },
  {
    id: 2,
    title: 'AUSTRILA VS BANGLADESH',
    date: '2023-09-02',
    // Add other match details
  },
  {
    id: 2,
    title: 'AUSTRILA VS BANGLADESH',
    date: '2023-09-02',
    // Add other match details
  },
  // Add more match objects
];

const PredictionPage = () => {
  const handlePay = (matchId) => {
    // Implement payment logic for the specific match
    console.log("payed amount")
  };

  return (
    <div>
        <Header
         title="Match Predections"
        />
        
        <div className='page-content'>
            <div className="prediction-page">
            {matchesData.map((match) => (
                <PredictionCard key={match.id} matchDetails={match} onPay={() => handlePay(match.id)} />
            ))}
            </div>
            </div>
        </div>
  );
};

export default PredictionPage;
