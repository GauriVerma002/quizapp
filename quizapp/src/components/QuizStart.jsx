import React from 'react';

const QuizStart = ({ onStart }) => (
  <div className="quiz-start">
    <h1>Welcome to the Quiz!</h1>
    <button onClick={onStart} className="start-button">
      Start Quiz
    </button>
  </div>
);

export default QuizStart;
