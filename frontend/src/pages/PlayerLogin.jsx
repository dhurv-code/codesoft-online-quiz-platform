import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function PlayerLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await api.post("/auth/login", {
      email,
      password,
      role: "player"
    });

    localStorage.setItem("token", res.data.token);
    navigate("/quizzes");
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>🎮 Player Login</h2>

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button>Login & Play</button>
    </form>
  );
}
