import React, { useState } from "react";
import "./App.css";

const questions = [
  {
    question: "What is the capital of Canada?",
    options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
    answer: "Ottawa",
  },
  {
    question: "Which programming language is used for React?",
    options: ["Python", "Java", "JavaScript", "C#"],
    answer: "JavaScript",
  },
  {
    question: "Which is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Jupiter",
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  };

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {showScore ? (
        <div className="score-section">
          <h2>Your Score: {score}/{questions.length}</h2>
          <button onClick={resetQuiz}>Play Again</button>
        </div>
      ) : (
        <div className="quiz-section">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerClick(option)}
                className="option-button"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
