import React, { useEffect, useState } from "react";
import { fetchQuizData } from "../services/QuizApi";

const QuizQuestion = () => {
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    fetchQuizData()         // after changes -> ()
      .then(response => {
        console.log(response.data);  //
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setQuiz(data))
      .catch(error => console.error("Error fetching data:", error));  
  }, []);

  return (
    <div>
      {quiz ? (
        <>
          <h2>{quiz.title || "Quiz Title"}</h2>
          <p>Topic: {quiz.topic || "No topic provided"}</p>
          {quiz.questions?.questions_count > 0 ? (
            quiz.questions.map((question, index) => (
              <div key={index}>
                <p>{question.description || `Question ${index + 1}`}</p>
                {question.options?.map(option => (
                  <button key={option.id}>{option.description}</button>
                ))}
              </div>
            ))
          ) : (
            <p>No questions available</p>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default QuizQuestion;
