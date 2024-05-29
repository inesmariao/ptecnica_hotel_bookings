import React, { useState } from 'react';

const RatesView = () => {
    const [season, setSeason] = useState('alta');
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const [accommodationType, setAccommodationType] = useState('estándar');
    const [rates, setRates] = useState([]);

    const handleGetRates = () => {
        const rates = [
            { hotel: 'Hotel A', rate: 100 },
            { hotel: 'Hotel B', rate: 120 },
            { hotel: 'Hotel C', rate: 150 }
        ];
        setRates(rates);
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Ver Tarifas de Hoteles</h2>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="season" className="form-label">Temporada:</label>
                        <select
                            id="season"
                            className="form-select"
                            value={season}
                            onChange={(e) => setSeason(e.target.value)}
                        >
                            <option value="alta">Alta</option>
                            <option value="baja">Baja</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="numberOfPeople" className="form-label">Número de Personas:</label>
                        <input
                            type="number"
                            id="numberOfPeople"
                            className="form-control"
                            value={numberOfPeople}
                            onChange={(e) => setNumberOfPeople(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="accommodationType" className="form-label">Tipo de Alojamiento:</label>
                        <select
                            id="accommodationType"
                            className="form-select"
                            value={accommodationType}
                            onChange={(e) => setAccommodationType(e.target.value)}
                        >
                            <option value="estándar">Estándar</option>
                            <option value="premium">Premium</option>
                            <option value="VIP">VIP</option>
                        </select>
                    </div>
                    <button className="btn btn-primary" onClick={handleGetRates}>Consultar Tarifas</button>
                </div>
            </div>
            <div className="row justify-content-center mt-4">
                <div className="col-md-6">
                    <h4>Tarifas de Hoteles:</h4>
                    <ul>
                        {rates.map((rate, index) => (
                            <li key={index}>{rate.hotel}: ${rate.rate}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RatesView;
