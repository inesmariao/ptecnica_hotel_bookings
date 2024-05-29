import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ApiClient from '../api/ApiClient';

const HotelDetail = () => {
    const { id } = useParams();
    const [hotel, setHotel] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        city: ''
    });
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        ApiClient.getHotel(id)
            .then(response => {
                setHotel(response.data);
                setFormData({
                    name: response.data.name,
                    city: response.data.city
                });
            })
            .catch(error => {
                console.error('¡Hubo un error al buscar el hotel!', error);
            });
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        ApiClient.updateHotel(id, formData)
            .then(response => {
                console.log('Hotel updated!', response.data);
                setHotel(response.data);
                setSuccessMessage('¡Modificación exitosa!');
                setTimeout(() => {
                    setSuccessMessage('');
                }, 3000);
            })
            .catch(error => {
                console.error('¡Hubo un error al actualizar el hotel!', error);
            });
    };

    if (!hotel) return <div>Loading...</div>;

    return (
        <div className="container mt-5">
            <h1>{hotel.name}</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre:</label>
                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">Ciudad:</label>
                    <input type="text" className="form-control" id="city" name="city" value={formData.city} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Guardar Cambios</button>
            </form>
            {successMessage && (
                <div className="alert alert-success mt-3" role="alert">
                    {successMessage}
                </div>
            )}
            <Link to="/hotels" className="btn btn-secondary mt-3">Regresar</Link>
        </div>
    );
};

export default HotelDetail;
