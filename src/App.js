import React, { useState } from "react";
import "./App.css";

export const questions = [
  {
    question: "What does 'CI/CD' stand for in DevOps??????",
    options: [
      "Continuous Integration/Continuous Delivery",
      "Critical Infrastructure/Cloud Deployment",
      "Code Implementation/Continuous Debugging",
      "Cloud Integration/Continuous Development",
    ],
    answer: "Continuous Integration/Continuous Delivery",
  },
  {
    question: "Which tool is commonly used for container orchestration in DevOps?",
    options: ["Docker", "Kubernetes", "Git", "Jenkins"],
    answer: "Kubernetes",
  },
  {
    question: "What is the primary purpose of a version control system in DevOps?",
    options: [
      "Manage server configurations",
      "Track changes in codebase",
      "Automate deployments",
      "Monitor application performance",
    ],
    answer: "Track changes in codebase",
  },
  {
    question: "Which of the following is NOT a CI/CD tool?",
    options: ["Jenkins", "Travis CI", "CircleCI", "Photoshop"],
    answer: "Photoshop",
  },
  {
    question: "What is Infrastructure as Code (IaC) in DevOps?",
    options: [
      "Automating infrastructure management with code",
      "A programming language for DevOps",
      "A method for designing user interfaces",
      "None of the above",
    ],
    answer: "Automating infrastructure management with code",
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