import axios from "axios";

export const MenuKiAPI = axios.create({
    baseURL: process.env.URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });