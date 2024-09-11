import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const BookingPage = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [lounge, setLounge] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/lounges/${id}/')
            .then(response => {
                setLounge(response.data);
            })
            .catch(error => {
                console.error('There was an ERROR fetching the lounges!');
            });
    }, []);

    const bookLounge = (id) => {
        axios.post(`http://localhost:3000/api/lounges/${id}/book/`)
            .then(response => {
                //go through every lounge and find the lounge with a matching id
                setLounge({...lounge, availability: 'Occupied'}); 
            })
            .catch (error => {
                console.error('There was an error booking the lounge!');
            });
    }

    return (
        <div>
            <h1>Booking Page</h1>
            <p>Floor: {lounge.floor}</p>
            <p>Room: {lounge.room}</p>
            <button onClick={() => {bookLounge(id); navigate(`/timer`)}}> Confirm Booking </button>
        </div>
    )
} 

export default BookingPage;
    


