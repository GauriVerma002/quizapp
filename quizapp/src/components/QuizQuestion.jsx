import React, { useEffect, useState } from "react";
import { fetchQuizData } from "../services/QuizApi";
import Card from "./Card";
import ScoreCard from "./ScoreCard";

const QuizQuestion = () => {
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});

  useEffect(() => {
    const getQuiz = async () => {
      const data = await fetchQuizData();
      setQuiz(data);
    };
    getQuiz();
  }, []);

  const handleOptionClick = (option) => {
    const isCorrect = option.is_correct;
    if (selectedOptions[currentQuestionIndex] === undefined) {
      setSelectedOptions({ ...selectedOptions, [currentQuestionIndex]: option.id });
      setScore((prevScore) => prevScore + (isCorrect ? 4 : -1));
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="post">
      {quiz ? (
        <>
          <Card data={quiz} />
          <h2>{quiz.title || "Quiz Title"}</h2>
          <p>Topic: {quiz.topic || "No topic provided"}</p>
          {quiz.questions?.length > 0 && (
            <div>
              <p>{quiz.questions[currentQuestionIndex].description || `Question ${currentQuestionIndex + 1}`}</p>
              {quiz.questions[currentQuestionIndex].options?.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleOptionClick(option)}
                  disabled={selectedOptions[currentQuestionIndex] !== undefined}
                >
                  {option.description}
                </button>
              ))}
            </div>
          )}

          <div className="navigation-buttons">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            <button
              onClick={handleNextQuestion}
              disabled={currentQuestionIndex === quiz.questions.length - 1}
            >
              Next
            </button>
          </div>

          <ScoreCard score={score} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default QuizQuestion;
