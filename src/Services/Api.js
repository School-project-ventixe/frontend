import Api from "./Api";

export async function login(email, password) {
  const response = await Api.post("/auth/login", { email, password });

  // DEBUG: logga hela svaret för att se hur det ser ut
  console.log("login() response.data:", response.data);

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
