import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './BookingDurationPage.css';

const BookingDurationPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [duration, setDuration] = useState(0);

    const handleSliderChange = (event) => {
        setDuration(event.target.value);
    };

    const handleConfirmBooking = () => {
        navigate(`/timerpage/${id}`, { state: { duration: duration } }); // Pass duration as state
    };

    return (
        <div className="booking-duration-container">
            <h1>Booking Room {id}</h1>
            <p>Select how long you want the room for:</p>
            <input 
                type="range" 
                min="0" 
                max="240" 
                value={duration} 
                onChange={handleSliderChange} 
            />
            <p>Duration: {duration} minutes</p>
            <button onClick={handleConfirmBooking} disabled={duration === 0}>Confirm Booking</button>
        </div>
    );
};

export default BookingDurationPage;
