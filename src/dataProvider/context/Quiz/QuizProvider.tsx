import { useContext,createContext, useReducer, useState } from "react";
import { ContextType, ProviderProp, State, UserAnswer } from "./QuizProvider.types";
import { quizReducer } from "../../reducer/quizReducer";

const initialState: State = {
    score: 0
};

const QuizContext = createContext<ContextType>({ state: initialState, dispatch: () => null,userAnswers: [],setUserAnswer: ((prevState => prevState))});

export function QuizProvider({children}: ProviderProp){
    const [state,dispatch]  = useReducer(quizReducer,initialState);
    const [userAnswers,setUserAnswer] = useState<UserAnswer[]>([]);
    return (
        <QuizContext.Provider value={{ state, dispatch,userAnswers,setUserAnswer }}>
            {children}
        </QuizContext.Provider>
        
    );
}

export function useQuiz() {
    return useContext(QuizContext);
}

