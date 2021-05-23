import React, { useContext,createContext, useReducer } from "react";
import { ContextType, ProviderProp, State } from "./QuizProvider.types";
import { quizReducer } from "./quizReducer";

const initialState: State = {
    score: 0
};

const QuizContext = createContext<ContextType>({ state: initialState, dispatch: () => null });

export function QuizProvider({children}: ProviderProp){
    const [state,dispatch]  = useReducer(quizReducer,initialState);
    return (
        <QuizContext.Provider value={{ state, dispatch }}>
            {children}
        </QuizContext.Provider>
        
    );
}

export function useQuiz() {
    return useContext(QuizContext);
}

