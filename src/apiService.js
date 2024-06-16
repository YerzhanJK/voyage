// src/apiService.js
import axios from 'axios';

const API_BASE_URL = '/api';

export const getDestinations = async () => {
    const response = await axios.get(`${API_BASE_URL}/destinations/list`);
    return response.data;
};

export const createDestination = async (destination) => {
    const response = await axios.post(`${API_BASE_URL}/destinations/create`, destination);
    return response.data;
};

export const removeDestination = async (id) => {
    await axios.post(`${API_BASE_URL}/destinations/delete`, { id });
};

export const updateDestination = async (destination) => {
    const response = await axios.post(`${API_BASE_URL}/destinations/update`, destination);
    return response.data;
};

export const deleteDestination = async (id) => {
    await axios.post(`${API_BASE_URL}/destinations/delete`, { id });
};
