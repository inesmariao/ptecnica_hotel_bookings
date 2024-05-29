import React, { useEffect, useState } from 'react';
import ApiClient from '../api/ApiClient';

const HotelList = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        ApiClient.getHotels()
            .then(response => {
                setHotels(response.data);
            })
            .catch(error => {
                console.error('¡Se ha producido un error al buscar los hoteles!', error);
            });
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center mt-4">Hotels</h2>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead className="bg-light">
                        <tr>
                            <th className="border">Nombre Hotel</th>
                            <th className="border">Ciudad</th>
                            <th className="border" style={{ width: '100px' }}>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hotels.map(hotel => (
                            <tr key={hotel.id}>
                                <td className="border">{hotel.name}</td>
                                <td className="border">{hotel.city}</td>
                                <td className="border align-items-center">
                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-primary me-2">Editar</button>
                                        <button className="btn btn-danger">Eliminar</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HotelList;
