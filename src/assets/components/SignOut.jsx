// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const SignOut = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const logout = async () => {
//       try {
//         await fetch(
//           "https://auth-ventixe-cuaghfb9exbjc5c7.swedencentral-01.azurewebsites.net/api/auth/logout",
//           {
//             method: "POST",
//             credentials: "include",
//           }
//         );
//       } catch (err) {
//         console.error("Logout failed", err);
//       } finally {
//         navigate("/login");
//       }
//     };

//     logout();
//   }, [navigate]);

//   return null;
// };

// export default SignOut;

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
        // Töm allt i sessionStorage
        sessionStorage.clear();

        // Om du använder React Context/Redux för att lagra user,
        // lägg till setUser(null) eller motsvarande här.

        // Navigera tillbaka till inloggningssidan
        navigate("/login");
      }
    };

    logout();
  }, [navigate]);

  return null;
};

export default SignOut;