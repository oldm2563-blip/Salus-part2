import axios from 'axios';
 
const APP_URL = 'http://16.171.43.223/api'

const token = JSON.parse(localStorage.getItem("token")); 

const axio = axios.create({
  baseURL: APP_URL,
  headers: {
       Authorization : `Bearer ${token}`
  },
});

export default axio;