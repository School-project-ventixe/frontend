import axios from "axios";

const verificationClient = axios.create({
  baseURL:
    "https://email-verification-ventixe-bmczfsbygehbbabx.swedencentral-01.azurewebsites.net/api/verification",
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
