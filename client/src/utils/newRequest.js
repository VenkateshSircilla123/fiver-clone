import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://fiver-clone-server.vercel.app/api",
  withCredentials: true,
});

export default newRequest;
