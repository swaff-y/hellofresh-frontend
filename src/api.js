import axios from 'axios';

// https://hello-fresh-backend.herokuapp.com/

const api = axios.create({
  baseURL: "https://hello-fresh-backend.herokuapp.com/",
})

export default api;
