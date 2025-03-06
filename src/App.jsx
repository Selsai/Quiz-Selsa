import React, { useState } from 'react';
import FilterQuiz from './components/FilterQuiz';
import QuizAccordion from './components/QuizAccordion';
import './App.css';

function App() {
    const [category, setCategory] = useState('All');

    return (
        <div className="container mt-4">
            <h1 className="text-center">Quiz Interactif</h1>
            <FilterQuiz setCategory={setCategory} />
            <QuizAccordion category={category} />
        </div>
    );
}

export default App;
