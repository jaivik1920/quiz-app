import { render, screen,fireEvent  } from '@testing-library/react';
import React from "react";
import App , {questions} from './App';

describe("Quiz App Tests", () => {
  test("renders the first question on load", () => {
    render(<App />);
    const questionElement = screen.getByText(/What does 'CI\/CD' stand for in DevOps\?/i);
    expect(questionElement).toBeInTheDocument();
  });

  test("renders options for the first question", () => {
    render(<App />);
    const options = screen.getAllByRole("button");
    expect(options.length).toBe(4);
    expect(options[0]).toHaveTextContent("Continuous Integration/Continuous Delivery");
  });

  test("after selecting the option moving to the next question", () => {
    render(<App />);
    const correctOption = screen.getByText("Continuous Integration/Continuous Delivery");
    fireEvent.click(correctOption);

    const nextQuestion = screen.getByText(/Which tool is commonly used for container orchestration in DevOps\?/i);
    expect(nextQuestion).toBeInTheDocument();
  });


  test("shows score after the last question", () => {
    render(<App />);

    questions.forEach((question) => {
      const correctOption = screen.getByText(question.answer);
      fireEvent.click(correctOption);
    });

    const scoreElement = screen.getByText(/Your Score: 5\/5/i);
    expect(scoreElement).toBeInTheDocument();
  });

  test("resets the quiz when Play Again is clicked", () => {
    render(<App />);

    questions.forEach((question) => {
      const correctOption = screen.getByText(question.answer);
      fireEvent.click(correctOption);
    });

    const playAgainButton = screen.getByText("Play Again");
    fireEvent.click(playAgainButton);

    const firstQuestion = screen.getByText(/What does 'CI\/CD' stand for in DevOps\?/i);
    expect(firstQuestion).toBeInTheDocument();
  });
});
