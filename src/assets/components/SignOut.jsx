import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout as clearSession } from "../../Services/Auth";

const SignOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const doLogout = async () => {
      try {
        await fetch(
          "https://auth-ventixe-cuaghfb9exbjc5c7.swedencentral-01.azurewebsites.net/api/auth/logout",
          {
            method: "POST",
            credentials: "include",
          }
        );
      } catch (err) {
        console.error("Logout failed", err);
      } finally {
        clearSession();
        navigate("/login");
      }
    };

    doLogout();
  }, [navigate]);

  return null;
};

export default SignOut;
