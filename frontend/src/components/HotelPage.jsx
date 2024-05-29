import React from 'react';
import HotelCreate from './HotelCreate';
import HotelList from './HotelList';

const HotelPage = () => {
    return (
        <div id="hotel-page" className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <HotelCreate />
                </div>
            </div>
            <HotelList />
        </div>
    );
};

export default HotelPage;
