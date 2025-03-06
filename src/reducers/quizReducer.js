const quizReducer = (state, action) => {
    switch (action.type) {
      case 'ANSWER_QUESTION':
        return {
          ...state,
          questions: state.questions.map((q) =>
            q.id === action.payload.id && q.correct === null
              ? { ...q, correct: action.payload.isCorrect }
              : q
          ),
        };
      default:
        return state;
    }
  };
  
  export default quizReducer;
  