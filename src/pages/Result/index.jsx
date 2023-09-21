import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import Axios from 'axios';
import ExpertCard from "../../component/ExpertCard";
import { Header } from '../../component';
import { getLocalStorage } from '../../utility/storageutility'; // Import your utility for getting JWT token
import { accessTokenKey } from '../../constants/storageconstants';

export default function Result() {
    const [predictionResultData, setPredictionResultData] = useState([]);
    const navigate = useNavigate(); // Use useNavigate for navigation

    useEffect(() => {
        getPredictionResultsApiCall();
    }, []);

    const getPredictionResultsApiCall = async () => {
        try {
            const apiUrl = 'http://localhost:8000/auth/api/results'; // API endpoint
            const authToken = getLocalStorage(accessTokenKey); // Replace with your method for fetching the JWT token

            const headers = {
                Authorization: `JWT ${authToken}`, // Include the JWT token in the headers
            };

            const response = await Axios.get(apiUrl, { headers });

            if (response.status === 200) {
                const data = response.data;
                console.log('API Response:', data);

                // Update the state with the fetched data
                setPredictionResultData(data.predicted_teams);
            } else {
                console.error('Error fetching prediction data:', response.status, response.statusText);
                // Handle the error gracefully, e.g., set an error state
            }
        } catch (error) {
            console.error('Error fetching prediction data:', error);
            // Handle the error gracefully, e.g., set an error state
        }
    };

    function handlereq(uuid, price) {
        // Redirect to the Expert Team page with the UUID as a URL parameter
        navigate(`/expert-team/${uuid}`);

    }

    return (
        <div>
            <Header title="Match Predictions" />
            <div className='page-content'>
                <div className="prediction-page">

                    {predictionResultData && predictionResultData.map((prediction) => (
                        <ExpertCard
                            key={prediction.uuid}
                            teamName={prediction.uuid}
                            price={prediction.price}
                            onPay={() => handlereq(prediction.uuid, prediction.price)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
