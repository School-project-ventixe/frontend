import axios from "axios";

const api = axios.create({
  baseURL: "https://auth-ventixe-cuaghfb9exbjc5c7.swedencentral-01.azurewebsites.net/api",
  timeout: 60000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;