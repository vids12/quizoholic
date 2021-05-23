import React, { ReactNode } from "react"

export type State ={
    score: number
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
        payload: number
    }
    | {
        type: "DECREEMENT_SCORE",
        payload: number
    }
    | {
        type: "NIL_SCORE"
    }
