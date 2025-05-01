import axios from "axios";

const HOST_URL = "http://localhost:3200/api/";

const api = axios.create({
  baseURL: HOST_URL,
});

export default api;
