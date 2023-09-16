import React, {useEffect} from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import PredictionCard from '../../component/PredectionCard';
import './Prediction.css';
import { Header } from '../../component';
//generate api call
import { getpredictionpage } from '../../store/Prediction/predictionthunk';
import { generateApiUrl } from '../../api/apihelper';

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
  const dispatch = useDispatch()
  

  useEffect(() => {
    getPredictionApiCall();
   }, []);

   async function getPredictionApiCall() {
    try {
      const response = await dispatch(getpredictionpage(generateApiUrl('Predection')));
      console.log('API Response:', response);
      // Handle response or update state as needed
    } catch (error) {
      console.error('Error fetching prediction data:', error);
      // Handle the error gracefully, e.g., set an error state
    }
  }
  

   //const { results: Predictiondata } = PredictionListResp || {};


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
