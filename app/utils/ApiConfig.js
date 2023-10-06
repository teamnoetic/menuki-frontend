import axios from "axios";

export const MenuKiAPI = axios.create({
    baseURL: "https://test.abid.com.bd/api",
    headers: {
      'Content-Type': 'application/json',
    },
  });