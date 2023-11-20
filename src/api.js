import axios from "axios";

const instance = axios.create({
  baseURL: "http://13.233.95.42:9000/api",
});

export default instance;
