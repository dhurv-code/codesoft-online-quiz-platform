import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

export default function TakeQuiz() {
  const { id } = useParams();

  const [quiz, setQuiz] = useState(null);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    api.get(`/quiz/${id}`).then((res) => {
      setQuiz(res.data);
    });
  }, [id]);

  if (!quiz) return <p>Loading...</p>;

  const question = quiz.questions[current];

  const handleSelect = (optionIndex) => {
    const updated = [...answers];
    updated[current] = optionIndex;
    setAnswers(updated);
  };

  const nextQuestion = () => {
    setCurrent(current + 1);
  };

  const submitQuiz = async () => {
    const res = await api.post(`/quiz/submit/${id}`, {
      answers
    });
    alert(`Score: ${res.data.score}/${res.data.total}`);
  };

  return (
    <div className="container">
    <div>
      <h2>{quiz.title}</h2>

      <h3>
        Question {current + 1} / {quiz.questions.length}
      </h3>

      <p>{question.questionText}</p>

      {question.options.map((opt, i) => (
        <button
          key={i}
          onClick={() => handleSelect(i)}
          style={{
            background: answers[current] === i ? "lightblue" : ""
          }}
        >
          {opt}
        </button>
      ))}

      {current < quiz.questions.length - 1 ? (
        <button onClick={nextQuestion}>Next</button>
      ) : (
        <button onClick={submitQuiz}>Submit</button>
      )}
    </div>
    </div>
  );
}
