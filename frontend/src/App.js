import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HotelPage from './components/HotelPage';
import HotelDetail from './components/HotelDetail';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/hotels" element={<HotelPage />} />
                <Route path="/hotels/:id" element={<HotelDetail />} />
            </Routes>
        </Router>
    );
};

export default App;
