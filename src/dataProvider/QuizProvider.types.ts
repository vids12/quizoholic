import React, {  ReactNode } from "react"
import { Answer } from "../data/quiz.types"

export type State ={
    score: number
}

export type ContextType = {
    state: State,
    dispatch: React.Dispatch<any>,
    userAnswers: UserAnswer[],
    setUserAnswer: React.Dispatch<React.SetStateAction<UserAnswer[]>>
}

export type ProviderProp = {
    children: ReactNode
}
export type Action = 
    | {
        type: "INCREEMENT_SCORE",
        payload: number
    }
    | {
        type: "DECREEMENT_SCORE",
        payload: number
    }
    | {
        type: "NIL_SCORE"
    }



export type UserAnswer = {
    Qno: number,
    selectedAnswer: Answer
}