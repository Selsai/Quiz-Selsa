import React, { useContext } from 'react';
import { Accordion } from 'react-bootstrap';
import QuestionItem from './QuestionItem';
import { QuizContext } from '../context/QuizContext';

function QuizAccordion({ category }) {
  const { state } = useContext(QuizContext);

  const filteredQuestions =
    category === 'All'
      ? state.questions
      : state.questions.filter((q) => q.category === category);

  return (
    <Accordion defaultActiveKey={0}>
      {filteredQuestions.map((question, index) => (
        <QuestionItem key={index} question={question} index={index} />
      ))}
    </Accordion>
  );
}

export default QuizAccordion;
