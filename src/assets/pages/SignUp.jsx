import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logotype.svg";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        "https://auth-ventixe-cuaghfb9exbjc5c7.swedencentral-01.azurewebsites.net/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        //  Navigera till verifieringssida efter lyckad registrering
        navigate(`/verify-email?email=${encodeURIComponent(formData.email)}`);
      } else {
        const data = await response.json();
        if (Array.isArray(data)) {
          setError(data.map((err) => err.description).join(", "));
        } else if (typeof data === "string") {
          setError(data);
        } else if (data?.error) {
          setError(data.error);
        } else {
          setError("Registration failed");
        }
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <form className="_registerForm" onSubmit={handleSubmit}>
        <img src={logo} alt="Ventixe logo" />
        <h1>Sign Up For Ventixe</h1>

        <input
          className="_registerInput"
          type="text"
          name="firstName"
          placeholder="First name"
          required
          onChange={handleChange}
        />
        <input
          className="_registerInput"
          type="text"
          name="lastName"
          placeholder="Last name"
          required
          onChange={handleChange}
        />
        <input
          className="_registerInput"
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
        />
        <input
          className="_registerInput"
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
        />

        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

        <button className="_logInBtn" type="submit">
          Sign Up
        </button>
      </form>

      <div className="_signUpLink">
        <span>Already have an account?</span>
        <NavLink to="/login" className="_signUpSpan">
          <span>Login</span>
        </NavLink>
      </div>
    </div>
  );
};

export default SignUp;
