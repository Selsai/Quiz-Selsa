import React, { useContext } from 'react';
import { Accordion, Button } from 'react-bootstrap';
import { QuizContext } from '../context/QuizContext';

function QuestionItem({ question, index }) {
    const { dispatch } = useContext(QuizContext);

    const handleAnswer = (isCorrect) => {
        dispatch({ type: 'ANSWER_QUESTION', payload: { id: question.id, isCorrect } });
    };

    return (
        <Accordion.Item eventKey={index.toString()} className="p-2">
            <Accordion.Header>
                <i className="fas fa-question-circle me-2"></i> {question.text}
                {question.answered && (
                    <span className={`badge ms-2 ${question.correct ? 'bg-success' : 'bg-danger'}`}>
                        {question.correct ? <i className="fas fa-check-circle"></i> : <i className="fas fa-times-circle"></i>}
                    </span>
                )}
            </Accordion.Header>
            <Accordion.Body>
                <p><i className="fas fa-lightbulb"></i> Réponse : {question.answer}</p>
                {!question.answered && (
                    <div>
                        <Button variant="success" onClick={() => handleAnswer(true)} className="me-2">
                            <i className="fas fa-check"></i> Juste
                        </Button>
                        <Button variant="danger" onClick={() => handleAnswer(false)}>
                            <i className="fas fa-times"></i> Faux
                        </Button>
                    </div>
                )}
            </Accordion.Body>
        </Accordion.Item>
    );
}

export default QuestionItem;
