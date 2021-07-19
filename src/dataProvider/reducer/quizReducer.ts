import { State } from "../context/Quiz/QuizProvider.types";
import { Action } from "../context/Quiz/QuizProvider.types";

export function quizReducer(state: State,action: Action){
    switch(action.type){
        case "INCREEMENT_SCORE":
            return {score: state.score + action.payload.points, userAnswers: state.userAnswers.concat(action.payload.answer)};
        case "DECREEMENT_SCORE": 
            return {score: state.score - action.payload.points, userAnswers: state.userAnswers.concat(action.payload.answer)};
        case "NIL_SCORE":
            return {score: 0,userAnswers: []};
        default:
            return state;
    }

}