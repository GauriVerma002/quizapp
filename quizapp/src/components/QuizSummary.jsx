import React from 'react';


const QuizSummary = ({ totalPoints }) => (
  <div className="quiz-summary">
    <h1>Quiz Completed!</h1>
    <p>Total Points Scored: {totalPoints}</p>
    <button onClick={() => window.location.reload()}>Restart Quiz</button>
  </div>
);

export default QuizSummary;
