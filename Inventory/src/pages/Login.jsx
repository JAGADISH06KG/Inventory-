import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import inventoryImg from "../assets/Inventory.jpg";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("All fields are required!");
      return;
    }

    // ✅ Get stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === form.email &&
      storedUser.password === form.password
    ) {
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid email or password!");
    }
  };

  const containerStyle = {
    width: "100%",
    height: "100dvh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    overflow: "hidden",
    position: "fixed",
    top: 0,
    left: 0,
  };

  const cardStyle = {
    width: "60%",
    maxWidth: "900px",
    height: "70%",
    display: "flex",
    borderRadius: "1.5rem",
    boxShadow: "0 0 20px rgba(0,0,0,0.1)",
    backgroundColor: "white",
    overflow: "hidden",
  };

  const leftStyle = {
    width: "50%",
    backgroundImage: `url(${inventoryImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const rightStyle = {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "5%",
  };

  const formStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  };

  const inputStyle = {
    margin: "10px 0",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "10px",
    border: "1.5px solid #cbd5e1",
    outline: "none",
    transition: "border 0.3s",
  };

  const buttonStyle = {
    marginTop: "15px",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "10px",
    cursor: "pointer",
    backgroundColor: "#5674c4",
    color: "white",
    border: "none",
    transition: "background-color 0.3s",
  };

  const linkStyle = {
    marginTop: "15px",
    fontSize: "14px",
    color: "#5674c4",
    textDecoration: "underline",
    cursor: "pointer",
    transition: "color 0.3s",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={leftStyle}></div>

        <div style={rightStyle}>
          <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>Login</h1>

          <form onSubmit={handleSubmit} style={formStyle}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "#5674c4")}
              onBlur={(e) => (e.target.style.borderColor = "#cbd5e1")}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "#5674c4")}
              onBlur={(e) => (e.target.style.borderColor = "#cbd5e1")}
              required
            />
            <button
              type="submit"
              style={buttonStyle}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#3e5bbd")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#5674c4")}
            >
              Log In
            </button>
          </form>

          <div
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.color = "#3e5bbd")}
            onMouseLeave={(e) => (e.target.style.color = "#5674c4")}
            onClick={() => navigate("/signup")}
          >
            Don't have an account? Sign Up
          </div>
        </div>
      </div>
    </div>
  );
}