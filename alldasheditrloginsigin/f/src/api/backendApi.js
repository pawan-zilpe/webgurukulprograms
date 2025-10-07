import axios from "axios";
const backendInstance = axios.create({
  baseURL: "http://localhost:3000",
});

export default backendInstance;
