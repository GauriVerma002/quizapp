import React from "react";

const ScoreCard = ({ score }) => {
  return (
    <div className="score-card">
      <h2>Score Card</h2>
      <p>Your Current Score: {score}</p>
    </div>
  );
};

export default ScoreCard;
