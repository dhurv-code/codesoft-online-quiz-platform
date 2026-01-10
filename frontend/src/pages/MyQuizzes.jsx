import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function MyQuizzes() {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/quiz/my-quizzes").then((res) => {
      setQuizzes(res.data);
    });
  }, []);

  return (
    <div className="dashboard">
      <h1>📋 My Quizzes</h1>

      {quizzes.length === 0 && <p>No quizzes created yet.</p>}

      {quizzes.map((q) => (
        <div key={q._id} className="quiz-card">
          <h3>{q.title}</h3>
          <p>{q.description}</p>
          <button onClick={() => navigate(`/quiz/${q._id}`)}>
            Preview
          </button>
        </div>
      ))}
    </div>
  );
}
