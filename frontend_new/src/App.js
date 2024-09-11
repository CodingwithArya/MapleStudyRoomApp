import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './App.css';
import Map from './Map'; // Ensure this path is correct
import NavBar from './NavBar'; // Ensure this path is correct
import LoungePage from './LoungePage'; // Ensure this path is correct
import BookingPage from './BookingPage'; // Ensure this path is correct
import BookingDurationPage from './BookingDurationPage'; // Ensure this path is correct
import Timer from './Timer';
import TimerPage from './TimerPage'; // Import the TimerPage component

function Home() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Maple Hall Study Room Tool!</h1>
        <Link to="/map">
          <Button variant="contained" onClick={() => navigate('/map')}>View Available Lounges</Button>
        </Link>
      </header>
    </div>
  );
}


function App() {
  return ( 
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/lounges" element={<LoungePage />} />
        <Route path="/book/:id" element={<BookingPage />} />
        <Route path="/booking-duration/:id" element={<BookingDurationPage />} /> {/* New route for booking duration */}
        <Route path="/timer/:id" element={<Timer />} />
        <Route path="/timerpage/:id" element={<TimerPage />} /> {/* New route for TimerPage */}
      </Routes>
    </div>
  );
}

export default App;