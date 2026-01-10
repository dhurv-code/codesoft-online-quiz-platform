import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Online Quiz Platform</h1>
      <p>
        Create quizzes or attempt existing quizzes to test your knowledge.
      </p>

      <div className="home-actions">
        <button onClick={() => navigate("/create-quiz")}>
          Create Quiz
        </button>

        <button onClick={() => navigate("/quizzes")}>
          Participate Quiz
        </button>
      </div>
    </div>
  );
}
