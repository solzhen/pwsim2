import axios from 'axios';

const URL =
  process.env.NODE_ENV === "production"
    ? import.meta.env.VITE_BACKEND_URL
    : "http://localhost:8000";

console.log(URL);
const wrestlerApi = axios.create({
    baseURL: `${URL}/wrestling/api/v1/wrestlers`,
});


export const getWrestlers = async () => {
    try {
        const response = await wrestlerApi.get('/');
        return response.data;
    } catch (error) {
        console.error('Error getting wrestlers:', error);
        throw error;
    }
};

export const getWrestler = async (wrestlerId) => {
    try {
        const response = await wrestlerApi.get(`/${wrestlerId}`);
        return response.data;
    } catch (error) {
        console.error('Error getting wrestler:', error);
        throw error;
    }
};

export const createWrestler = async (wrestlerData) => {
    try {
        const response = await wrestlerApi.post('/', wrestlerData);
        return response.data;
    } catch (error) {
        console.error('Error creating wrestler:', error);
        throw error;
    }
};

export const updateWrestler = async (wrestlerId, wrestlerData) => {
    try {
        const response = await wrestlerApi.put(`/${wrestlerId}`, wrestlerData);
        return response.data;
    } catch (error) {
        console.error('Error updating wrestler:', error);
        throw error;
    }
};

export const deleteWrestler = async (wrestlerId) => {
    try {
        const response = await wrestlerApi.delete(`/${wrestlerId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting wrestler:', error);
        throw error;
    }
};
