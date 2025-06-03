import Api from "./Api";

export async function login(email, password) {
  const response = await Api.post("/auth/login", { email, password });
  const token = response.data.accessToken;
  sessionStorage.setItem("jwtToken", token);
  return token;
}

export function logout() {
  sessionStorage.removeItem("jwtToken");
}
