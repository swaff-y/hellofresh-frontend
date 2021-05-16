import axios from 'axios';

// https://hello-fresh-backend.herokuapp.com/
// http://localhost:3000/

const api = axios.create({
  baseURL: "http://localhost:3000/",
})

export default api;
