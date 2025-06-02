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

// // Custom hook
// export const useAuth = () => useContext(AuthContext);
