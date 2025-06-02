import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
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
        navigate("/login");
      }
    };

    logout();
  }, [navigate]);

  return null;
};

export default SignOut;
