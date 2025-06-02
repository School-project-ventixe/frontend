import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../../Services/Auth.";
import logo from "../assets/images/logotype.svg";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(null);
    try {
      await login(email, pw);
      navigate("/events");
    } catch {
      setErr("Misslyckad inloggning");
    }
  };

  return (
    <>
      <div className="_loginHead">
        <img src={logo} alt="logotype" />
        <h1>Ventixe</h1>
      </div>
      <form className="_loginForm" onSubmit={handleSubmit}>
        {err && <p style={{ color: "red" }}>{err}</p>}
        <input
          className="_loginInput"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          className="_loginInput"
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          placeholder="Lösenord"
          required
        />
        <button className="_logInBtn" type="submit">
          Log In
        </button>
      </form>
      <div className="_signUpLink">
        <span>No account?</span>
        <NavLink to="/signup" className="_signUpSpan">
          <span>Sign Up</span>
        </NavLink>
      </div>
    </>
  );
}
