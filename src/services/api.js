import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333/tools",

  // Setting this header just because every api action POST need
  // to contain that header
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
