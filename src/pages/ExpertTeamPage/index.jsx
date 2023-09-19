import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { getLocalStorage } from '../../utility/storageutility';
import { accessTokenKey } from '../../constants/storageconstants';
import "./expertteam.css";

export default function ExpertTeamPage() {
    const [expertTeamData, setExpertTeamData] = useState(null);
    const { uuid } = useParams();

    useEffect(() => {
        getExpertTeamData();
    }, [uuid]);

    const getExpertTeamData = async () => {
        try {
            const apiUrl = `http://localhost:8000/results/${uuid}`;
            const authToken = getLocalStorage(accessTokenKey);

            const headers = {
                Authorization: `JWT ${authToken}`,
            };

            const response = await Axios.get(apiUrl, { headers });

            if (response.status === 200) {
                const data = response.data;
                console.log('API Response:', data);

                setExpertTeamData(data); // Set the expert team data in state
            } else {
                console.error('Error fetching expert team data:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error fetching expert team data:', error);
        }
    };

    return (
        <div>
            <div title="Expert Team" />
            <div className='page-content'>
                {expertTeamData && (
                    <div className="table-container">
                        <h2 className="team-name">{expertTeamData.team.teamName}</h2>
                        <table className="players-table">
                            <thead>
                                <tr>
                                    <th>Player Name</th>
                                    <th>Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {expertTeamData.players.map((player) => (
                                    <tr key={player.uuid}>
                                        <td>{player.playerName}</td>
                                        <td>{player.role}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
