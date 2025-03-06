const quizReducer = (state, action) => {
    switch (action.type) {
        case 'ANSWER_QUESTION':
            return {
                ...state,
                questions: state.questions.map(q =>
                    q.id === action.payload.id && !q.answered
                        ? { ...q, answered: true, correct: action.payload.isCorrect }
                        : q
                )
            };
        default:
            return state;
    }
};

export default quizReducer;
