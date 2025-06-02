import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const VerifyEmail = () => {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const email = searchParams.get("email");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://auth-ventixe-cuaghfb9exbjc5c7.swedencentral-01.azurewebsites.net/api/auth/confirm",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ email, code }),
        }
      );

      if (!res.ok) {
        const data = await res.json();
        setMessage(data?.error || "Verification failed");
        return;
      }

      setMessage("Email verified successfully!");
      setTimeout(() => navigate("/login"), 2000);
    } catch {
      setMessage("Something went wrong.");
    }
  };

  return (
    <div className="_verifyContainer">
      <h2>Email Verification</h2>
      <p className="_pTagVerify">
        Enter the code sent to <br />
        <strong>{email}</strong>
      </p>
      <form className="_verifyEmailForm" onSubmit={handleSubmit}>
        <input
          className="_verifyEmailInput"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Verification code"
          required
        />
        <button type="submit">Verify</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default VerifyEmail;
