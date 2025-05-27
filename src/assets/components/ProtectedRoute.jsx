import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("https://localhost:7121/api/auth/me", {
          credentials: "include",
        });
        setIsAuthorized(res.ok);
      } catch {
        setIsAuthorized(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthorized === null) return <p>Checking authentication...</p>;
  if (!isAuthorized) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;
