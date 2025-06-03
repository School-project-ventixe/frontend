import axios from "axios";

const Api = axios.create({
  baseURL:
    "https://auth-ventixe-cuaghfb9exbjc5c7.swedencentral-01.azurewebsites.net/api",
  withCredentials: true,
  timeout: 60000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export async function login(email, password) {
  const response = await Api.post("/auth/login", { email, password });
  const token = response.data.accessToken;
  if (!token) {
    throw new Error("Ingen accessToken returnerades från servern");
  }
  sessionStorage.setItem("jwtToken", token);

  return token;
}

export function logout() {
  sessionStorage.removeItem("jwtToken");
}

export default Api;
