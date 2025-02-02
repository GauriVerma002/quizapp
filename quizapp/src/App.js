import React, { useState, useEffect } from 'react';
import { fetchQuizData } from './services/QuizApi';
import QuizStart from './components/QuizStart';
import QuizQuestion from './components/QuizQuestion';
import QuizSummary from './components/QuizSummary';

const App = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  useEffect(() => {
    const loadQuizData = async () => {
      const data = await fetchQuizData();
      setQuizData(data);
    };
    loadQuizData();
  }, []);

  const handleStartQuiz = () => setIsQuizStarted(true);

  const handleNextQuestion = (points) => {
    setTotalPoints(totalPoints + points);
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  if (!isQuizStarted) return <QuizStart onStart={handleStartQuiz} />;

  if (isQuizCompleted) return <QuizSummary totalPoints={totalPoints} />;

  return (
    <QuizQuestion
      questionData={quizData[currentQuestionIndex]}
      onNext={handleNextQuestion}
    />
    
  );
};

export default App;

