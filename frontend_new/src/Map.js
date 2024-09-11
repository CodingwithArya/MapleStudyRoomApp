
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Map.css';

const Map = () => {
    const navigate = useNavigate();
    const floors = [
        { id: '3rd-floor', label: '3RD FLOOR', rooms: ['402A', '402C', '402D'] },
        { id: '4th-floor', label: '4TH FLOOR', rooms: ['502A', '502C', '502D'] },
        { id: '5th-floor', label: '5TH FLOOR', rooms: ['602A', '602C', '602D'] },
        { id: '6th-floor', label: '6TH FLOOR', rooms: ['702A', '702C', '702D'] },
        { id: '7th-floor', label: '7TH FLOOR', rooms: ['802A', '802C', '802D'] },
        { id: '8th-floor', label: '8TH FLOOR', rooms: ['902A', '902C', '902D'] },
    ];

    const handleRoomClick = (floorId, roomId) => {
        const roomKey = `${floorId}-${roomId}`;
        navigate(`/booking-duration/${roomKey}`);
    };

    return (
        <div className="map-container">
            {floors.map(floor => (
                <div key={floor.id} className="floor">
                    <div className="floor-label">{floor.label}</div>
                    <div className="rooms">
                        {floor.rooms.map(roomId => (
                            <button
                                key={roomId}
                                className="room available"
                                onClick={() => handleRoomClick(floor.id, roomId)}
                            >
                                {roomId}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Map;