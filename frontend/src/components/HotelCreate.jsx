import React, { useState } from 'react';
import ApiClient from '../api/ApiClient';

const HotelCreate = () => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newHotel = { name, city };

        ApiClient.createHotel(newHotel)
            .then(response => {
                console.log('Hotel created!', response.data);
                setSuccessMessage('¡Hotel creado con éxito!');
                setName('');
                setCity('');
            })
            .catch(error => {
                console.error('Hubo un error al crear el hotel!', error);
            });
    };

    return (
        <div className="container mt-5">
            {successMessage && (
                <div className="alert alert-success" role="alert">
                    {successMessage}
                </div>
            )}
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="border shadow p-4 rounded">
                        <h3 className="text-center mb-4">Crear Nuevo Hotel</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nombre:</label>
                                <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="city" className="form-label">Ciudad:</label>
                                <input type="text" className="form-control" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
                            </div>
                            <button type="submit" className="btn btn-primary text-center">Crear Hotel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelCreate;
