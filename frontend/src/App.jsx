import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import CreateQuiz from "./pages/CreateQuiz.jsx";
import QuizList from "./pages/QuizList.jsx";
import TakeQuiz from "./pages/TakeQuiz.jsx";
import Navbar from "./components/Navbar.jsx";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        {/* routes stay same */}
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/create-quiz"
          element={
            <ProtectedRoute>
              <CreateQuiz />
            </ProtectedRoute>
          }
        />

        <Route
          path="/quizzes"
          element={
            <ProtectedRoute>
              <QuizList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/quiz/:id"
          element={
            <ProtectedRoute>
              <TakeQuiz />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
