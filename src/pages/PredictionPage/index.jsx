import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PredictionCard from '../../component/PredectionCard';
import './Prediction.css';
import { Header } from '../../component';
import { getLocalStorage } from '../../utility/storageutility';
import { accessTokenKey } from '../../constants/storageconstants';
import { getpredictionpage } from '../../store/predict/predictthunk';
import { generateApiUrl } from '../../api/apihelper';

const matchesData = [
  {
    id: 1,
    title: 'INDIA vs PAKISTAN',
    date: '2023-09-01',
    // Add other match details
  },
  // Add more match objects
];

const PredictionPage = () => {
  const [predictionData, setPredictionData] = useState([]); // State to store prediction data
  const dispatch = useDispatch();

  useEffect(() => {
    getPredictionApiCall();
  }, []);

  async function getPredictionApiCall() {
    try {
      const apiUrl = 'http://localhost:8000/prediction/'; // Replace with your API endpoint

      // Retrieve the authorization token from local storage
      const authToken = getLocalStorage(accessTokenKey); // Fetch the token from local storage

      const headers = {
        Authorization: `JWT ${authToken}`, // Include the token in the headers
      };

      const response = await fetch(apiUrl, { headers });

      if (response.ok) {
        const data = await response.json();
        console.log('API Response:', data);

        // Update the state with the fetched data
        setPredictionData(data.predicted_teams);
      } else {
        console.error('Error fetching prediction data:', response.status, response.statusText);
        // Handle the error gracefully, e.g., set an error state
      }
    } catch (error) {
      console.error('Error fetching prediction data:', error);
      // Handle the error gracefully, e.g., set an error state
    }
  }

  const handlePay = (matchId) => {
    // Implement payment logic for the specific match
    window.location.href = "https://checkout.razorpay.com/v1/pay/order_MdtNwoLs6YH3VK";
    console.log('Paid amount for match with ID:', matchId);
  };

  return (
    <div>
      <Header title="Match Predictions" />
      <div className='page-content'>
        <div className="prediction-page">
        {predictionData.map((prediction) => (
            <PredictionCard
              key={prediction.uuid}
              teamName={prediction.teamName}
              price={prediction.price}
              onPay={() => handlePay(prediction.uuid)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PredictionPage;
