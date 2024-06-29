import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://vsfiverrapp1.onrender.com/api",
  withCredentials: true,
});

export default newRequest;
