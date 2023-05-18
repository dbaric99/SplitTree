import axios from 'axios';

const axiosInstance = axios.create();

async function makeGetRequest(url, config = {}) {
    return axiosInstance.get(url, config)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}

async function makePostRequest(url, data, config = {}) {
    return axiosInstance.post(url, data, config)
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
}

export const requestUtil = {
    makeGetRequest,
    makePostRequest
};