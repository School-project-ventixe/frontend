import React, { useState, useEffect } from "react";
import api from "../../Services/Api";

export default function UserWelcome() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("/auth/me")
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Kunde inte hämta användarinfo:", err);
        setError("Misslyckades hämta användarinfo");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Hämtar användarinfo…</p>;
  }

  if (error || !user) {
    return <p style={{ color: "red" }}>{error || "Ingen användare hittad"}</p>;
  }

  return (
    <div className="_loggedInWelcome">
      <h2 className="_welcomeH2">Welcome</h2>
      <span className="_welcomeSpan">
        Hello {user.firstName} {user.lastName}, Welcome back!
      </span>
    </div>
  );
}
