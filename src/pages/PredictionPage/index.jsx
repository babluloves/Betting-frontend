import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import PredictionCard from '../../component/PredectionCard';
import './Prediction.css';
import { Header } from '../../component';
import { getLocalStorage } from '../../utility/storageutility';
import { accessTokenKey } from '../../constants/storageconstants';

const PredictionPage = () => {
  const [predictionData, setPredictionData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getPredictionApiCall();
    loadRazorpay(); // Load Razorpay script when the component mounts
  }, []);

  const loadRazorpay = () => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => {
      console.log('Razorpay script loaded');
    };
    document.body.appendChild(script);
  };

  const getPredictionApiCall = async () => {
    try {
      const apiUrl = 'http://localhost:8000/prediction/';
      const authToken = getLocalStorage(accessTokenKey);

      const headers = {
        Authorization: `JWT ${authToken}`,
      };

      const response = await fetch(apiUrl, { headers });

      if (response.ok) {
        const data = await response.json();
        console.log('API Response:', data);
        setPredictionData(data.predicted_teams);
      } else {
        console.error('Error fetching prediction data:', response.status, response.statusText);
      }
      
    } catch (error) {
      console.error('Error fetching prediction data:', error);
    }
  };

  const handlePay = (uuid, price) => {
    showRazorpay(uuid, price);
    console.log('Paid amount for match with UUID:', uuid);
  };

  const showRazorpay = async (uuid, price) => {
    try {
      const authToken = getLocalStorage(accessTokenKey);
      const bodyData = {
        // Include the data you want to send in the request body
      };

      const headers = {
        Authorization: `JWT ${authToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };

      const response = await Axios.post(
        `http://localhost:8000/prediction/${uuid}/`,
        bodyData,
        { headers }
      );
      

      if (response.status === 200) {
        console.log('Prediction POST request successful:', response.data);
        // Handle success as needed

        // After successfully creating the prediction, open Razorpay payment UI
        //console.log(response.order.order_payment_id);
        const options = {
          key_id: 'rzp_test_pUAFN3wugOV9Ek',
          key_secret: 'zilYJHW6eX7JaESyFkJfR0UY',
          amount: 200 * 100, // Amount in paise (Razorpay expects the amount in paise)
          currency: 'INR',
          name: 'Org. Name',
          description: 'Test transaction',
          image: '', // Add image URL
          order_id: response.data.payment.id,
          handler: function (response) {
            handlePaymentSuccess(response);
            console.log(response);
          },
          prefill: {
            name: "User's name",
            email: "User's email",
            contact: "User's phone",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };

        var rzp1 = new window.Razorpay(options);
        rzp1.open();
      } else {
        console.error('Prediction POST request failed with status code:', response.status);
        // Handle other status codes as needed
      }
    } catch (error) {
      console.error('Error making prediction POST request:', error);
      // Handle other errors as needed
    }
  };

  const handlePaymentSuccess = async (response) => {
    try {
      const payload = {
        response: JSON.stringify(response), // Convert response to a JSON string
      };
  
      const apiUrl = 'http://localhost:8000/success/';
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
  
      const res = await Axios.post(apiUrl, payload, { headers });
  
      if (res.status === 200) {
        console.log('Payment success POST request successful:', res.data);
        // Handle success as needed
      } else {
        console.error('Payment success POST request failed with status code:', res.status);
        // Handle other status codes as needed
      }
    } catch (error) {
      console.error('Error making payment success POST request:', error);
      // Handle other errors as needed
    }
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
              onPay={() => handlePay(prediction.uuid, prediction.price)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PredictionPage;
