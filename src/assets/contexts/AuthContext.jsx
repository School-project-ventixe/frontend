// import { createContext, useContext, useEffect, useState } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const checkAuthStatus = async () => {
//     try {
//       const res = await fetch("https://auth-ventixe-cuaghfb9exbjc5c7.swedencentral-01.azurewebsites.net/api/auth/me", {
//         credentials: "include",
//       });

//       if (!res.ok) throw new Error("Not authenticated");

//       const data = await res.json();
//       setUser(data);
//     } catch {
//       setUser(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     checkAuthStatus();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, setUser, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const authApi = axios.create({
    baseURL: "https://auth-ventixe-cuaghfb9exbjc5c7.swedencentral-01.azurewebsites.net/api/auth",
    headers: {
      "Content-Type": "application/json",
    },
  });
  authApi.interceptors.request.use((config) => {
    const token = sessionStorage.getItem("jwtToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = sessionStorage.getItem("jwtToken");
      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }
      try {
        const res = await authApi.get("/me");
        setUser(res.data);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuthStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);