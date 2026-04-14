import axios from "axios";
import { data } from "react-router-dom";

const APP_URL = "http://16.171.43.223/api";


export const register = (data) => axios.post(APP_URL + '/register', data);
export const login = (data) => axios.post(APP_URL + '/login', data);
export const profile = (token) => axios.get(APP_URL + '/me' , {
    headers: {
        Authorization: `Bearer ${token}`
    }
})