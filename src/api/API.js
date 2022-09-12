import axios from 'axios';

const URL = 'http://localhost:5000';

function createUser (body) {
    const promise = axios.post(`${URL}/auth/sign-up`, body);
    return promise;
}

function postLogin (body) {
    const promise = axios.post(`${URL}/auth/sign-in`, body);
    return promise;
}

function getCashFlow (token) {
    const promise = axios.get(`${URL}/cashflow`, token);
    return promise;
}

function getBalance (token) {
    const promise = axios.get(`${URL}/balance`, token);
    return promise;
}

function postRegister (body, token) {
    const promise = axios.post(`${URL}/cashflow`, body, token);
    return promise;
}

function logOut (token) {
    const promise = axios.post(`${URL}/log-out`, {}, token);
    return promise;
}

function updateStatus (token) {
    const promise = axios.post(`${URL}/status`, {}, token);
    return promise;
}

export { 
    createUser, 
    postLogin, 
    getCashFlow, 
    getBalance, 
    postRegister,
    logOut,
    updateStatus
};