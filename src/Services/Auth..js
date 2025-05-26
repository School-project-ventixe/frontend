import api from "./Api";

export function login(email, password) {
  return api.post("/auth/login", { email, password });
}
