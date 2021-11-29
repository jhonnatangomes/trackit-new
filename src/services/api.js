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

function createHabit(body, token) {
    return axios.post(`${API_URL}/habits`, body, headersConfig(token));
}

function deleteHabit(habitId, token) {
    return axios.delete(`${API_URL}/habits/${habitId}`, headersConfig(token));
}

function getHabitToday(token) {
    return axios.get(`${API_URL}/habits/today`, headersConfig(token));
}

function checkHabit(habitId, token) {
    return axios.post(
        `${API_URL}/habits/${habitId}/check`,
        {},
        headersConfig(token)
    );
}

function uncheckHabit(habitId, token) {
    return axios.post(
        `${API_URL}/habits/${habitId}/uncheck`,
        {},
        headersConfig(token)
    );
}

export {
    signUp,
    signIn,
    getHabits,
    createHabit,
    deleteHabit,
    getHabitToday,
    checkHabit,
    uncheckHabit,
};
