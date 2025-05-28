import axios from "axios";

const verificationClient = axios.create({
  baseURL: "https://localhost:7050/api/verification",
  headers: {
    "Content-Type": "application/json",
  },
});

export const verifyCode = (email, code) => {
  return verificationClient.post("/verify", {
    email,
    code,
  });
};
