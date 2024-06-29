import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://fiver-clone-b4n5.onrender.com/api",
  withCredentials: true,
});

export default newRequest;
