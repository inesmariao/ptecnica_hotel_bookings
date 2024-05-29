import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HotelPage from './components/HotelPage';
import HotelDetail from './components/HotelDetail';
import AvailabilityCheck from './components/AvailabilityCheck';
import RatesView from './components/RatesView';
import PriceCalculator from './components/PriceCalculator';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/hotels" element={<HotelPage />} />
                <Route path="/hotels/:id" element={<HotelDetail />} />
                <Route path="/availability-check" element={<AvailabilityCheck />} />
                <Route path="/rates-view" element={<RatesView />} />
                <Route path="/price-calculator" element={<PriceCalculator />} />
            </Routes>
        </Router>
    );
};

export default App;
