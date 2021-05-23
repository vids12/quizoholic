import { State } from "./QuizProvider.types";
import { Action } from "./QuizProvider.types";

export function quizReducer(state: State,action: Action){
    switch(action.type){
        case "INCREEMENT_SCORE":
            return {...state,score: state.score + action.payload};
        case "DECREEMENT_SCORE": 
            return {...state,score: state.score - action.payload};
        case "NIL_SCORE":
            return {...state,score: 0};
        default:
            return state;
    }

}