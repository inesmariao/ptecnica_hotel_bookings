import React, { useEffect, useState } from 'react';
import ApiClient from '../api/ApiClient';
import { Link } from 'react-router-dom';
import DeleteConfirmationModal from './DeleteConfirmationModal';

const HotelList = () => {
    const [hotels, setHotels] = useState([]);
    const [editingHotelId, setEditingHotelId] = useState(null);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [hotelToDelete, setHotelToDelete] = useState(null);

    useEffect(() => {
        ApiClient.getHotels()
            .then(response => {
                setHotels(response.data);
            })
            .catch(error => {
                console.error('¡Se ha producido un error al buscar los hoteles!', error);
            });
    }, []);

    const handleEditHotel = (id) => {
        setEditingHotelId(id);
    };

    const handleShowDeleteConfirmation = (hotel) => {
        setHotelToDelete(hotel);
        setShowDeleteConfirmation(true);
    };

    const handleDeleteHotel = () => {
        if (hotelToDelete) {
            ApiClient.deleteHotel(hotelToDelete.id)
                .then(() => {
                    // Recargar la lista de hoteles después de la eliminación
                    ApiClient.getHotels()
                        .then(response => {
                            setHotels(response.data);
                        });
                })
                .catch(error => {
                    console.error('¡Error al eliminar el hotel!', error);
                });
        }
        setShowDeleteConfirmation(false);
    };

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
                                        <Link to={`/hotels/${hotel.id}`} className="btn btn-primary me-2" onClick={() => handleEditHotel(hotel.id)}>Editar</Link>
                                        <button className="btn btn-danger" onClick={() => handleShowDeleteConfirmation(hotel)}>Eliminar</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {showDeleteConfirmation && (
                <DeleteConfirmationModal
                    hotel={hotelToDelete}
                    onCancel={() => setShowDeleteConfirmation(false)}
                    onDelete={handleDeleteHotel}
                />
            )}
        </div>
    );
};

export default HotelList;
