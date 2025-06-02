import axios from "axios";

const bookingApi = axios.create({
  baseURL: "https://booking-ventixe-cpgehhh3anh9g0ah.swedencentral-01.azurewebsites.net/api",
  timeout: 60000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

bookingApi.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("jwtToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

bookingApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default bookingApi;