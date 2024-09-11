import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './TimerPage.css';

const TimerPage = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const { duration } = location.state; // Get duration from the passed state

    const [timeLeft, setTimeLeft] = useState(duration * 60); // Timer duration in seconds
    const [timerId, setTimerId] = useState(null);

    useEffect(() => {
        // Create the timer in the Alexa API
        const createTimer = async () => {
            try {
                const response = await axios.post('https://api.amazonalexa.com/v1/alerts/timers', {
                    duration: `PT${Math.floor(duration / 60)}M${duration % 60}S`,
                    timerLabel: `Booking Room ${id}`,
                    creationBehavior: {
                        displayExperience: {
                            visibility: "VISIBLE"
                        }
                    },
                    triggeringBehavior: {
                        operation: {
                            type: "NOTIFY_ONLY"
                        },
                        notificationConfig: {
                            playAudible: true
                        }
                    }
                }, {
                    headers: {
                        'Authorization': `Bearer YOUR_ACCESS_TOKEN`,
                        'Content-Type': 'application/json'
                    }
                });
                setTimerId(response.data.id);
            } catch (error) {
                console.error("Error creating timer", error);
            }
        };

        createTimer();

        // Countdown logic
        const countdownInterval = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(countdownInterval);
                    alert("Time's up!"); // Display pop-up when timer hits zero
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(countdownInterval); // Cleanup the interval on unmount
    }, [duration, id]);

    const handleDoneWithLounge = () => {
        if (timerId) {
            axios.delete(`https://api.amazonalexa.com/v1/alerts/timers/${timerId}`, {
                headers: {
                    'Authorization': `Bearer YOUR_ACCESS_TOKEN`
                }
            }).then(() => {
                navigate('/'); // Navigate back to the main (home) page
            }).catch((error) => {
                console.error("Error deleting timer", error);
            });
        } else {
            navigate('/'); // Navigate back if no timerId
        }
    };

    return (
        <div className="timer-page">
            <h1>Timer starts now!</h1>
            <div className="timer-display">
                <span>{new Date(timeLeft * 1000).toISOString().substr(11, 8)}</span> {/* Display remaining time */}
            </div>
            <p>If your timer runs out and the room is available at the moment, you can book it again!</p>
            <button onClick={handleDoneWithLounge}>Done with Lounge</button>
        </div>
    );
};

export default TimerPage;



// import React, { useState, useEffect } from 'react';
// import { useLocation, useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './TimerPage.css';

// const TimerPage = () => {
//     const { id } = useParams();
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { duration } = location.state; // Get duration from the passed state

//     const [timerId, setTimerId] = useState(null);

//     useEffect(() => {
//         const createTimer = async () => {
//             try {
//                 const response = await axios.post('https://api.amazonalexa.com/v1/alerts/timers', {
//                     duration: `PT${Math.floor(duration / 60)}M${duration % 60}S`,
//                     timerLabel: `Booking Room ${id}`,
//                     creationBehavior: {
//                         displayExperience: {
//                             visibility: "VISIBLE"
//                         }
//                     },
//                     triggeringBehavior: {
//                         operation: {
//                             type: "NOTIFY_ONLY"
//                         },
//                         notificationConfig: {
//                             playAudible: true
//                         }
//                     }
//                 }, {
//                     headers: {
//                         'Authorization': `Bearer YOUR_ACCESS_TOKEN`,
//                         'Content-Type': 'application/json'
//                     }
//                 });
//                 setTimerId(response.data.id);
//             } catch (error) {
//                 console.error("Error creating timer", error);
//             }
//         };

//         createTimer();
//     }, [duration, id]);

//     const handleDoneWithLounge = () => {
//         if (timerId) {
//             axios.delete(`https://api.amazonalexa.com/v1/alerts/timers/${timerId}`, {
//                 headers: {
//                     'Authorization': `Bearer YOUR_ACCESS_TOKEN`
//                 }
//             }).then(() => {
//                 navigate('/map');
//             }).catch((error) => {
//                 console.error("Error deleting timer", error);
//             });
//         }
//     };

//     return (
//         <div className="timer-page">
//             <h1>Timer starts now!</h1>
//             <div className="timer-display">
//                 <span>{new Date(duration * 60 * 1000).toISOString().substr(11, 8)}</span>
//             </div>
//             <p>If your timer runs out and the room is available at the moment, you can book it again!</p>
//             <button onClick={handleDoneWithLounge}>Done with Lounge</button>
//         </div>
//     );
// };

// export default TimerPage;
