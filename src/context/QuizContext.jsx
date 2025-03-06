import React, { createContext, useReducer } from 'react';
import quizReducer from '../reducers/quizReducer';

const initialState = {
    questions: [
        // Histoire
        { id: 1, text: "En quelle année la Tunisie a-t-elle obtenu son indépendance ?", answer: "1956", category: "Histoire", correct: null },
        { id: 2, text: "Quel roi a été guillotiné pendant la Révolution française ?", answer: "Louis XVI", category: "Histoire", correct: null },
        { id: 3, text: "Qui était l'empereur de l’Empire romain en 44 av. J.-C. ?", answer: "Jules César", category: "Histoire", correct: null },

        // Math
        { id: 4, text: "Si un dinar tunisien vaut 1000 millimes, combien valent 2,5 dinars ?", answer: "2500 millimes", category: "Math", correct: null },
        { id: 5, text: "Si une baguette coûte 1,20€ et que j’en achète 3, combien vais-je payer ?", answer: "3,60€", category: "Math", correct: null },
        { id: 6, text: "Si un Italien roule à 90 km/h pendant 2 heures, quelle distance parcourt-il ?", answer: "180 km", category: "Math", correct: null },

        // Science
        { id: 7, text: "Quel désert couvre une grande partie du sud tunisien ?", answer: "Le désert du Sahara", category: "Science", correct: null },
        { id: 8, text: "Quelle est la plus haute montagne de France ?", answer: "Le Mont Blanc", category: "Science", correct: null },
        { id: 9, text: "Quel volcan actif se trouve en Italie ?", answer: "Le Vésuve", category: "Science", correct: null }
    ]
};

export const QuizContext = createContext();

export function QuizProvider({ children }) {
    const [state, dispatch] = useReducer(quizReducer, initialState);

    return (
        <QuizContext.Provider value={{ state, dispatch }}>
            {children}
        </QuizContext.Provider>
    );
}
