import axios from 'axios';

const URL =
  process.env.NODE_ENV === "production"
    ? import.meta.env.VITE_BACKEND_URL
    : "http://localhost:8000";

console.log(URL);
const wrestlerApi = axios.create({
    baseURL: `${URL}/wrestling/api/v1/wrestlers`,
});
const companyApi = axios.create({
    baseURL: `${URL}/wrestling/api/v1/companies`,
});
const wrestlerRelationApi = axios.create({
    baseURL: `${URL}/wrestling/api/v1/wrestler_relations`,
});
const contractApi = axios.create({
    baseURL: `${URL}/wrestling/api/v1/contracts`,
});
const constantsApi = axios.create({
    baseURL: `${URL}/wrestling/api/v1/constants`,
});

export const getConstants = async () => {
    try {
        const response = await constantsApi.get('/');
        return response.data;
    } catch (error) {
        console.error('Error getting constants:', error);
        throw error;
    }
};
export const getStyles = async () => {
    try {
        const response = await constantsApi.get('/styles');
        return response.data;
    } catch (error) {
        console.error('Error getting styles:', error);
        throw error;
    }
};
export const getMonths = async () => {
    try {
        const response = await constantsApi.get('/months');
        return response.data;
    } catch (error) {
        console.error('Error getting months:', error);
        throw error;
    }
};
export const getNationalities = async () => {
    try {
        const response = await constantsApi.get('/nationalities');
        return response.data;
    } catch (error) {
        console.error('Error getting nationalities:', error);
        throw error;
    }
};
export const getMoves = async () => {  
    try {
        const response = await constantsApi.get('/moves');
        return response.data;
    } catch (error) {
        console.error('Error getting moves:', error);
        throw error;
    }
};


// Wrestlers CRUD functions
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
        const response = await wrestlerApi.get(`/${wrestlerId}/`);
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
        const response = await wrestlerApi.put(`/${wrestlerId}/`, wrestlerData);
        return response.data;
    } catch (error) {
        console.error('Error updating wrestler:', error);
        throw error;
    }
};

export const deleteWrestler = async (wrestlerId) => {
    try {
        const response = await wrestlerApi.delete(`/${wrestlerId}/`);
        return response.data;
    } catch (error) {
        console.error('Error deleting wrestler:', error);
        throw error;
    }
};


// Companies CRUD functions
export const getCompanies = async () => {
    try {
        const response = await companyApi.get('/');
        return response.data;
    } catch (error) {
        console.error('Error getting companies:', error);
        throw error;
    }
};

export const getCompany = async (companyId) => {
    try {
        const response = await companyApi.get(`/${companyId}/`);
        return response.data;
    } catch (error) {
        console.error('Error getting company:', error);
        throw error;
    }
};

export const createCompany = async (companyData) => {
    try {
        const response = await companyApi.post('/', companyData);
        return response.data;
    } catch (error) {
        console.error('Error creating company:', error);
        throw error;
    }
};

export const updateCompany = async (companyId, companyData) => {
    try {
        const response = await companyApi.put(`/${companyId}/`, companyData);
        return response.data;
    } catch (error) {
        console.error('Error updating company:', error);
        throw error;
    }
};

export const deleteCompany = async (companyId) => {
    try {
        const response = await companyApi.delete(`/${companyId}/`);
        return response.data;
    } catch (error) {
        console.error('Error deleting company:', error);
        throw error;
    }
};


// Wrestler Relations CRUD functions
export const getWrestlerRelations = async () => {
    try {
        const response = await wrestlerRelationApi.get('/');
        return response.data;
    } catch (error) {
        console.error('Error getting wrestler relations:', error);
        throw error;
    }
};

export const getWrestlerRelation = async (relationId) => {
    try {
        const response = await wrestlerRelationApi.get(`/${relationId}/`);
        return response.data;
    } catch (error) {
        console.error('Error getting wrestler relation:', error);
        throw error;
    }
};

export const createWrestlerRelation = async (relationData) => {
    try {
        const response = await wrestlerRelationApi.post('/', relationData);
        return response.data;
    } catch (error) {
        console.error('Error creating wrestler relation:', error);
        throw error;
    }
};

export const updateWrestlerRelation = async (relationId, relationData) => {
    try {
        const response = await wrestlerRelationApi.put(`/${relationId}/`, relationData);
        return response.data;
    } catch (error) {
        console.error('Error updating wrestler relation:', error);
        throw error;
    }
};

export const deleteWrestlerRelation = async (relationId) => {
    try {
        const response = await wrestlerRelationApi.delete(`/${relationId}/`);
        return response.data;
    } catch (error) {
        console.error('Error deleting wrestler relation:', error);
        throw error;
    }
};


// Contracts CRUD functions
export const getContracts = async () => {
    try {
        const response = await contractApi.get('/');
        return response.data;
    } catch (error) {
        console.error('Error getting contracts:', error);
        throw error;
    }
};

export const getContract = async (contractId) => {
    try {
        const response = await contractApi.get(`/${contractId}/`);
        return response.data;
    } catch (error) {
        console.error('Error getting contract:', error);
        throw error;
    }
};

export const createContract = async (contractData) => {
    try {
        const response = await contractApi.post('/', contractData);
        return response.data;
    } catch (error) {
        console.error('Error creating contract:', error);
        throw error;
    }
};

export const updateContract = async (contractId, contractData) => {
    try {
        const response = await contractApi.put(`/${contractId}/`, contractData);
        return response.data;
    } catch (error) {
        console.error('Error updating contract:', error);
        throw error;
    }
};

export const deleteContract = async (contractId) => {
    try {
        const response = await contractApi.delete(`/${contractId}/`);
        return response.data;
    } catch (error) {
        console.error('Error deleting contract:', error);
        throw error;
    }
};


