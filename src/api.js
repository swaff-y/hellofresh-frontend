import axios from 'axios';

// https://hello-fresh-backend.herokuapp.com/
// https://localhost:3000/

const api = axios.create({
  baseURL: "https://localhost:3000/",
})

export default api;
