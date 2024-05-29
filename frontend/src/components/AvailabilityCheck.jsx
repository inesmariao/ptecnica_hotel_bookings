import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AvailabilityCheck = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [availableHotels, setAvailableHotels] = useState([]);

    const handleDateChange = async (date) => {
        setStartDate(date);
        try {
            const availableHotels = [
                { id: 1, name: 'Hotel A', availableRooms: 5 },
                { id: 2, name: 'Hotel B', availableRooms: 10 },
                { id: 3, name: 'Hotel C', availableRooms: 3 }
            ];
            setAvailableHotels(availableHotels);
        } catch (error) {
            console.error('Error al obtener la disponibilidad de hoteles:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Ver Disponibilidad de Hoteles</h2>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="startDate" className="form-label">Fecha de Viaje:</label>
                        <DatePicker
                            id="startDate"
                            selected={startDate}
                            onChange={handleDateChange}
                            className="form-control"
                        />
                    </div>
                    <h4>Hoteles Disponibles:</h4>
                    <ul>
                        {availableHotels.map((hotel, index) => (
                            <li key={index}>{hotel.name} - Habitaciones Disponibles: {hotel.availableRooms}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AvailabilityCheck;
