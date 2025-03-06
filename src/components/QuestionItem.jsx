import React, { useContext } from 'react';
import { Accordion, Button } from 'react-bootstrap';
import { QuizContext } from '../context/QuizContext';

function QuestionItem({ question, index }) {
  const { dispatch } = useContext(QuizContext);

  const handleAnswer = (isCorrect) => {
    dispatch({ type: 'ANSWER_QUESTION', payload: { id: question.id, isCorrect } });
  };

  return (
    <Accordion.Item eventKey={index.toString()} className="question-item mb-3">
      <Accordion.Header className="d-flex align-items-center">
        <i className={`fas fa-${question.icon} me-3`}></i>
        <span className="question-text">{question.text}</span>
        {question.correct !== null && (
          <span className={`badge ms-3 ${question.correct ? 'bg-success' : 'bg-danger'}`}>
            {question.correct ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>}
          </span>
        )}
      </Accordion.Header>
      <Accordion.Body>
        <p className="answer-text"><i className="fas fa-lightbulb me-2"></i> Réponse : {question.answer}</p>
        {question.correct === null && (
          <div className="d-flex justify-content-center mt-3">
            <Button variant="outline-success" onClick={() => handleAnswer(true)} className="me-3">
              <i className="fas fa-check me-2"></i> Correct
            </Button>
            <Button variant="outline-danger" onClick={() => handleAnswer(false)}>
              <i className="fas fa-times me-2"></i> Incorrect
            </Button>
          </div>
        )}
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default QuestionItem;
