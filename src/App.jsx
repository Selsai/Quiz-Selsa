import React, { useState } from 'react';
import FilterQuiz from './components/FilterQuiz';
import QuizAccordion from './components/QuizAccordion';
import './App.css';
import SelsaLogo from '../public/Selsa.webp'; // Importation du logo

function App() {
    const [category, setCategory] = useState('All');

    return (
        <div className="container mt-4">
            {/* Logo Selsa centré */}
            <div className="logo-container">
                <img src={SelsaLogo} alt="Logo Selsa" className="selsa-logo" />
            </div>

            <h1 className="text-center">Quiz Interactif</h1>
            <FilterQuiz setCategory={setCategory} />
            <QuizAccordion category={category} />
        </div>
    );
}

export default App;
