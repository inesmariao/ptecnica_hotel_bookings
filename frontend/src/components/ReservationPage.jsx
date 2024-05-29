import React, { useState } from 'react';
import moment from 'moment'; 
import { Button, Modal } from 'react-bootstrap'; 

const ReservationPage = () => {

    const [formData, setFormData] = useState({
        startDate: moment().format('YYYY-MM-DD'), 
        endDate: moment().add(1, 'days').format('YYYY-MM-DD'), 
        sede: 'Barranquilla', 
        roomType: 'standard', 
        numberOfPersons: 1,
    });


    const [showModal, setShowModal] = useState(false);


    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Reserva de Hotel</h2>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                </div>
                <div className="d-grid gap-2">
                    <Button variant="primary" type="submit">Ver Disponibilidad y Calcular Tarifa</Button>
                </div>
            </form>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmación de Reserva</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Tu reserva ha sido confirmada.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ReservationPage;
