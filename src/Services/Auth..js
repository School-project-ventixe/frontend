import api from "./Api";

export function login(email, pw) {
  return api.post("/auth/login", { email, pw });
}

export function logout() {
  sessionStorage.removeItem("jwtToken");
}
