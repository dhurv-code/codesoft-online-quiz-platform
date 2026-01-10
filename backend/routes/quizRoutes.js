const express = require("express");
const Quiz = require("../models/Quiz");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Create quiz
router.post("/create", auth, async (req, res) => {
  const quiz = await Quiz.create({
    ...req.body,
    createdBy: req.user.id
  });
  res.json(quiz);
});

// Get all quizzes
router.get("/all", async (req, res) => {
  const quizzes = await Quiz.find().populate("createdBy","email");
  res.json(quizzes);
});

// Get quiz by ID
router.get("/:id", async (req, res) => {
  const quiz = await Quiz.findById(req.params.id);
  res.json(quiz);
});

// Submit quiz
router.post("/submit/:id", async (req, res) => {
  const { answers } = req.body;
  const quiz = await Quiz.findById(req.params.id);

  let score = 0;
  quiz.questions.forEach((q, i) => {
    if (answers[i] === q.correctAnswer) score++;
  });

  res.json({
    score,
    total: quiz.questions.length
  });
});

router.get("/my-quizzes", auth, async (req, res) => {
  const quizzes = await Quiz.find({ createdBy: req.user.id });
  res.json(quizzes);
});
router.delete("/:id", auth, async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    // only creator can delete
    if (quiz.createdBy.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not allowed" });
    }

    await quiz.deleteOne();
    res.json({ message: "Quiz deleted successfully" });

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;
