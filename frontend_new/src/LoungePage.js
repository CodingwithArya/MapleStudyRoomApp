import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Map.css';

const LoungePage = () => {

    // const floors = [
    //     {"floor": "3rd", "room": "302A", "availability": "Occupied"},
    //     {"floor": "4th", "room": "402A", "availability": "Available"},
    //     {"floor": "4th", "room": "402C", "availability": "Available"},
    //     {"floor": "4th", "room": "402D", "availability": "Available"},
    //     {"floor": "5th", "room": "502A", "availability": "Available"},
    //     {"floor": "5th", "room": "502C", "availability": "Available"},
    //     {"floor": "5th", "room": "502D", "availability": "Available"},
    //     {"floor": "6th", "room": "602A", "availability": "Available"},
    //     {"floor": "6th", "room": "602C", "availability": "Available"},
    //     {"floor": "6th", "room": "602D", "availability": "Available"},
    //     {"floor": "7th", "room": "702A", "availability": "Available"},
    //     {"floor": "7th", "room": "702C", "availability": "Available"},
    //     {"floor": "7th", "room": "702D", "availability": "Available"},
    //     {"floor": "8th", "room": "802A", "availability": "Available"},
    //     {"floor": "8th", "room": "802C", "availability": "Available"},
    //     {"floor": "8th", "room": "802D", "availability": "Available"},
    // ]

    const navigate = useNavigate();

    const [lounges, setLounges] = useState([]);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     axios.get('http://localhost:3000/api/lounges/')
    //         .then(response => {
    //             console.log('Fetched lounges:', response.data);
    //             setLounges(response.data);
    //         })
    //         .catch(error => {
    //             console.error('There was an error fetching the lounges!');
    //         });
    // }, []);

    useEffect(() => {
        async function fetchLounges() {
            try {
                const response = await axios.get('/api/lounges');
                setLounges(response.data);
            } catch (error) {
                setError(error.message);
            }
        }
        fetchLounges();
    }, []);



    return (
        <div className="map-container">
            <div id="booking-section">
                    <p>Click on available room to book it.</p>
            </div>

            <div>

                {lounges.length === 0 ? (
                    <p>No lounges available.</p>
                ) : (

                lounges.map(lounge => (
                        <div key={lounge.id} className="floor">
                            <div className="floor-label">Floor: {lounge.floor}</div>
                            <div className="rooms"> Room: {lounge.room}</div>
                            <div className="rooms"> Availability: {lounge.availability} </div>
                            {lounge.availability === 'Available' && (
                            <button onClick={() => navigate(`/book/${lounge.id}`)}>Book</button>
                            )}
                        </div>
                ))
            )}
            
            </div>
        </div>
    );
}

export default LoungePage;
