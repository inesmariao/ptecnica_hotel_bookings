import React, { useState } from 'react';

const PriceCalculator = () => {
    const [hotel, setHotel] = useState('');
    const [numberOfRooms, setNumberOfRooms] = useState(1);
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const [accommodationType, setAccommodationType] = useState('estándar');
    const [totalPrice, setTotalPrice] = useState(0);

    const calculatePrice = () => {

        const price = 150;
        setTotalPrice(price);
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Cálculo de Tarifas</h2>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="hotel" className="form-label">Hotel:</label>
                        <select
                            id="hotel"
                            className="form-select"
                            value={hotel}
                            onChange={(e) => setHotel(e.target.value)}
                        >
                            <option value="">Seleccione un hotel</option>
                            <option value="Hotel A">Hotel A</option>
                            <option value="Hotel B">Hotel B</option>
                            <option value="Hotel C">Hotel C</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="numberOfRooms" className="form-label">Número de Habitaciones:</label>
                        <input
                            type="number"
                            id="numberOfRooms"
                            className="form-control"
                            value={numberOfRooms}
                            onChange={(e) => setNumberOfRooms(e.target.value)}
                        />
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
                    <button className="btn btn-primary" onClick={calculatePrice}>Calcular Tarifa</button>
                </div>
            </div>
            <div className="row justify-content-center mt-4">
                <div className="col-md-6">
                    <h4>Tarifa a Cancelar:</h4>
                    <p>${totalPrice}</p>
                </div>
            </div>
        </div>
    );
};

export default PriceCalculator;
