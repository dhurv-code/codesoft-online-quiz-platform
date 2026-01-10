import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function QuizList() {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  const userEmail = localStorage.getItem("email"); // 👈 logged-in user

  const fetchQuizzes = () => {
    api.get("/quiz/all").then((res) => {
      setQuizzes(res.data);
    });
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const deleteQuiz = async (id) => {
    const confirmDelete = window.confirm("Delete this quiz?");
    if (!confirmDelete) return;

    await api.delete(`/quiz/${id}`);
    fetchQuizzes();
  };

  return (
    <div className="container">
      <h2>Available Quizzes</h2>

      {quizzes.map((q) => (
        <div className="quiz-card" key={q._id}>
          <h3>{q.title}</h3>
          <p>{q.description}</p>

          <button onClick={() => navigate(`/quiz/${q._id}`)}>
            Start Quiz
          </button>

          {/* 👇 Delete ONLY if creator */}
          {q.createdBy?.email === userEmail && (
            <button
              onClick={() => deleteQuiz(q._id)}
              style={{ marginLeft: "10px", backgroundColor: "#dc2626" }}
            >
              Delete
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
