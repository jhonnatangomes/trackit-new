import axios from 'axios';
const API_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function signUp(body) {
    return axios.post(`${API_URL}/auth/sign-up`, body);
}

function signIn(body) {
    return axios.post(`${API_URL}/auth/login`, body);
}

export { signUp, signIn };
