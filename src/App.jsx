import React, { useState, useContext, useEffect } from 'react';
import FilterQuiz from './components/FilterQuiz';
import QuizAccordion from './components/QuizAccordion';
import { QuizContext } from './context/QuizContext';
import { ProgressBar, Modal } from 'react-bootstrap';
import Confetti from 'react-confetti';
import './App.scss';
import SelsaLogo from '../public/Selsa.webp';

function App() {
  const [category, setCategory] = useState('All');
  const [theme, setTheme] = useState('beige');
  const { state } = useContext(QuizContext);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');

  const answeredQuestions = state.questions.filter(q => q.correct !== null).length;
  const totalQuestions = state.questions.length;
  const correctAnswers = state.questions.filter(q => q.correct === true).length;

  const progress = (answeredQuestions / totalQuestions) * 100;

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'beige' ? 'grey' : 'beige');
  };

  useEffect(() => {
    if (answeredQuestions === totalQuestions) {
      if (correctAnswers === totalQuestions) {
        setShowConfetti(true);
        setMessage("Bravo ! Vous avez répondu correctement à toutes les questions !");
        setShowMessage(true);
        setTimeout(() => setShowConfetti(false), 5000); // Arrête les confettis après 5 secondes
      } else {
        setMessage("Continuez à vous entraîner ! Vous vous améliorerez la prochaine fois.");
        setShowMessage(true);
      }
    }
  }, [answeredQuestions, totalQuestions, correctAnswers]);

  return (
    <div className={`app-container ${theme}`}>
      {showConfetti && <Confetti />}
      <button className="theme-toggle-button" onClick={toggleTheme}>
        {theme === 'beige' ? <i className="fas fa-cloud"></i> : <i className="fas fa-sun"></i>}
      </button>

      <div className="container mt-4">
        <div className="logo-container text-center mb-4">
          <img src={SelsaLogo} alt="Logo Selsa" className="selsa-logo" />
        </div>

        <h1 className="text-center mb-4">Quiz Interactif</h1>

        <div className="score-board mb-4">
          <h4 className="text-center">Score : {correctAnswers}/{totalQuestions}</h4>
          <ProgressBar now={progress} label={`${Math.round(progress)}%`} variant="info" className="mt-2" />
        </div>

        <FilterQuiz setCategory={setCategory} />
        <QuizAccordion category={category} />
      </div>

      <Modal show={showMessage} onHide={() => setShowMessage(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Résultat du Quiz</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
      </Modal>
    </div>
  );
}

export default App;
