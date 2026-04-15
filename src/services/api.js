import axios from 'axios';
 
const APP_URL = 'http://16.171.43.223/api'

const token = "41|yVLExfbUTOQI45oKU4UHRQFLJ1Rc3haWuVVcWrtW4804db4e"; 

const api = axios.create({
  baseURL: APP_URL,
  headers: {
       Authorization : `Bearer ${token}`
  },
});

export default api;