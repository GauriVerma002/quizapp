import React from 'react';
import './Card.css'

const QuizStart = ({ onStart }) => (
  <div className="quiz-card">
    <h1>Welcome to the Quiz!</h1>
    <button  onClick={onStart} >
      Start Quiz
    </button>
  </div>
);

export default QuizStart;
