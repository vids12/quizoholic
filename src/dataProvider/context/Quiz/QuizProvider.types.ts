import React, {  ReactNode } from "react"
import { Answer } from "../../../data/quiz.types"

export type State ={
    score: number,
    userAnswers: UserAnswer[]
}

export type ContextType = {
    state: State,
    dispatch: React.Dispatch<any>
}

export type ProviderProp = {
    children: ReactNode
}
export type Action = 
    | {
        type: "INCREEMENT_SCORE",
        payload: {
            points: number,
            answer: UserAnswer
        }
    }
    | {
        type: "DECREEMENT_SCORE",
        payload: {
            points: number,
            answer: UserAnswer
        }
    }
    | {
        type: "NIL_SCORE"
    }



export type UserAnswer = {
    Qno: number,
    selectedAnswer: Answer
}