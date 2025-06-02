import api from "./Api";

export async function login(email, password) {
  const response = await api.post("/auth/login", { email, password });

  console.log("login() response.data =", response.data);

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