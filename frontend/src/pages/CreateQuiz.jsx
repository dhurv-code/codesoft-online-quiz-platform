import { useState } from "react";
import api from "../services/api";

export default function CreateQuiz() {
  const [quiz, setQuiz] = useState({
    title: "",
    description: "",
    questions: [
      { questionText: "", options: ["", "", "", ""], correctAnswer: 0 }
    ]
  });

  const handleQuizChange = (e) => {
    setQuiz({ ...quiz, [e.target.name]: e.target.value });
  };

  const handleQuestionChange = (index, field, value) => {
    const updated = [...quiz.questions];
    updated[index][field] = value;
    setQuiz({ ...quiz, questions: updated });
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const updated = [...quiz.questions];
    updated[qIndex].options[oIndex] = value;
    setQuiz({ ...quiz, questions: updated });
  };

  const addQuestion = () => {
    setQuiz({
      ...quiz,
      questions: [
        ...quiz.questions,
        { questionText: "", options: ["", "", "", ""], correctAnswer: 0 }
      ]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/quiz/create", quiz);
    alert("Quiz Created Successfully");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Quiz</h2>

      <input
        name="title"
        placeholder="Quiz Title"
        onChange={handleQuizChange}
      />

      <input
        name="description"
        placeholder="Description"
        onChange={handleQuizChange}
      />

      {quiz.questions.map((q, qi) => (
        <div key={qi}>
          <input
            placeholder="Question"
            onChange={(e) =>
              handleQuestionChange(qi, "questionText", e.target.value)
            }
          />

          {q.options.map((opt, oi) => (
            <input
              key={oi}
              placeholder={`Option ${oi + 1}`}
              onChange={(e) =>
                handleOptionChange(qi, oi, e.target.value)
              }
            />
          ))}

          <label> correct answer:</label>
          <select

            onChange={(e) =>
              handleQuestionChange(qi, "correctAnswer", Number(e.target.value))
            }
          >

            <option value={0}>Option 1</option>
            <option value={1}>Option 2</option>
            <option value={2}>Option 3</option>
            <option value={3}>Option 4</option>
          </select>
        </div>
      ))}

      <button type="button" onClick={addQuestion}>
        Add Question
      </button>

      <button type="submit">Create Quiz</button>
    </form>
  );
}
