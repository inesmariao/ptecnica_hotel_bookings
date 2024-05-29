import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8000/api',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    },
});

const ApiClient = {

    getHotels: () => apiClient.get('/hotels/'),


    getHotel: (id) => apiClient.get(`/hotels/${id}/`),

    createHotel: (data) => apiClient.post('/hotels/', data),

    updateHotel: (id, data) => apiClient.put(`/hotels/${id}/`, data),

    deleteHotel: (id) => apiClient.delete(`/hotels/${id}/`),
};

export default ApiClient;
