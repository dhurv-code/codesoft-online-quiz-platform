import { useNavigate } from "react-router-dom";

export default function PlayerDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h1>Player Dashboard</h1>
      <p>Play quizzes and test your knowledge</p>

      <div className="dashboard-actions">
        <button onClick={() => navigate("/quizzes")}>
           Start Playing
        </button>

        <button onClick={() => navigate("/my-results")}>
           My Results
        </button>
      </div>
    </div>
  );
}
