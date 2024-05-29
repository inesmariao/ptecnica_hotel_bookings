import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ApiClient from '../api/ApiClient';

const HotelDetail = () => {
    const { id } = useParams();
    const [hotel, setHotel] = useState(null);

    useEffect(() => {
        ApiClient.getHotel(id)
            .then(response => {
                setHotel(response.data);
            })
            .catch(error => {
                console.error('¡Hubo un error al buscar el hotel!', error);
            });
    }, [id]);

    if (!hotel) return <div>Loading...</div>;

    return (
        <div className="container mt-5">
            <h1>{hotel.name}</h1>
            <p>City: {hotel.city}</p>
        </div>
    );
};

export default HotelDetail;
