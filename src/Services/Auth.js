import Api from "./Api";

export function login(email, pw) {
  return Api.post("/auth/login", { email, pw });
}

export function logout() {
  sessionStorage.removeItem("jwtToken");
}
