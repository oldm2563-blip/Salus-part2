import axios from "axios";

const APP_URL = "http://16.171.43.223/api";


export const register = (data) => axios.post(APP_URL + '/register', data);
export const login = (data) => axios.post(APP_URL + '/login', data);