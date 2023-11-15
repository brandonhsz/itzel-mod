import axios from "axios";
export const api = axios.create({
  baseURL: "http://192.168.100.5:3000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});
