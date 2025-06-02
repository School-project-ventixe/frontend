import axios from "axios";

const api = axios.create({
  baseURL: "https://auth-ventixe-cuaghfb9exbjc5c7.swedencentral-01.azurewebsites.net/api",
  withCredentials: true,
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const isAuthRequiredRoute =
      window.location.pathname.startsWith("/bookings") ||
      window.location.pathname.startsWith("/bookevent");

    if (error.response?.status === 401 && isAuthRequiredRoute) {
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default api;
