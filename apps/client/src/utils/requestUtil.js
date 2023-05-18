import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

async function makeGetRequest(url, config, headers = {}, isAuth = false, isAdmin = false) {
    return axiosInstance.get(url, config)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}

async function makePostRequest(url, config, headers = {}, data, isAuth = false, isAdmin = false) {
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