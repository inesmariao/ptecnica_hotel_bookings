import React from 'react';

const DeleteConfirmationModal = ({ hotel, onCancel, onDelete }) => {
    return (
        <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirmar Eliminación</h5>
                        <button type="button" className="btn-close" onClick={onCancel}></button>
                    </div>
                    <div className="modal-body">
                        <p>¿Estás seguro de que deseas eliminar el hotel {hotel ? hotel.name : ''}?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancelar</button>
                        <button type="button" className="btn btn-danger" onClick={onDelete}>Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;
