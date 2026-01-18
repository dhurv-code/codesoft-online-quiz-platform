import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "" 
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const selectRole = (role) => {
    setForm({ ...form, role });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.role) {
      alert("Arey bhai! Role choose karo");
      return;
    }
    if (form.role !== "creator" && form.role !== "player") {
      alert("Invalid role selected");
      return;
    }


    await api.post("/auth/register", form);

    if (form.role === "creator") {
      navigate("/creator-dashboard");
    } else {
      navigate("/quizzes");
    }
  };

  return (
    <div className="register-container">
      <h1>Welcome </h1>
      <p>Sabse pehle batao… tum ho kaun?</p>

      <div className="role-box">
        <button
          className={form.role === "creator" ? "active" : ""}
          onClick={() => selectRole("creator")}
        >
           I Create Quizzes
        </button>

        <button
          className={form.role === "player" ? "active" : ""}
          onClick={() => selectRole("player")}
        >
          🎮 I Play Quizzes
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button type="submit">Let Me In 🚀</button>
      </form>
    </div>
  );
}
