import { useNavigate } from "react-router-dom";

export default function CreatorDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h1>🧠 Creator Dashboard</h1>
      <p>Create quizzes and manage them</p>

      <div className="dashboard-actions">
        <button onClick={() => navigate("/create-quiz")}>
          ➕ Create New Quiz
        </button>

        <button onClick={() => navigate("/my-quizzes")}>
          📋 My Quizzes
        </button>
      </div>
    </div>
  );
}
