import Api from "./Api";

export async function login(email, password) {
  const response = await Api.post("/auth/login", { email, password });
  const token = response.data.accessToken;
  sessionStorage.setItem("jwtToken", token);

  Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const meRes = await Api.get("/auth/me");
  const user = meRes.data;
  sessionStorage.setItem("user", JSON.stringify(user));

  return { token, user };
}

export function logout() {
  sessionStorage.removeItem("jwtToken");
  sessionStorage.removeItem("user");
}
