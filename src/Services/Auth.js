import Api from "./Api";

export function login(email, password) {
  return Api.post("/auth/login", { email, password });
}

export function logout() {
  sessionStorage.removeItem("jwtToken");
}
