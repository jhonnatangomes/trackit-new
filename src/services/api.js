import axios from 'axios';
const API_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function headersConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
}

function signUp(body) {
    return axios.post(`${API_URL}/auth/sign-up`, body);
}

function signIn(body) {
    return axios.post(`${API_URL}/auth/login`, body);
}

function getHabits(token) {
    return axios.get(`${API_URL}/habits`, headersConfig(token));
}

export { signUp, signIn, getHabits };
