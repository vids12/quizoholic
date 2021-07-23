import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useQuiz } from "../dataProvider/context/Quiz/QuizProvider"
import { findQuestion } from "../utils/findQuestion";

export function DashBoard(){
    const { categoryName } = useParams();
    const { state,dispatch: scoreDispatch } = useQuiz();  
    return <div className="h-screen">
        <div className="text-center bg-gradient-to-r from-indigo-400 to-purple-500">
            <Link to="/">
                <i className="fa fa-home text-xl font-bold cursor-pointer md:text-3xl text-white p-4 absolute left-0" aria-hidden="true" onClick={()=> scoreDispatch({type: "NIL_SCORE"})}></i>
            </Link>
            <h1 className="font-bold text-3xl text-white p-4">Your Answers</h1>
            <ul>
                {state.userAnswers?.map((obj,index)=>{
                    return <li className="border-gray-500 border-0 m-4 bg-gray-200 p-2 rounded-lg bg-opacity-50 shadow-sm" key={index}
                    >
                        <p className="font-bold"><span>{obj.Qno}. </span>{findQuestion(obj.Qno,categoryName)?.text}</p>
                        <p className="p-2 ">Your Answer: {obj.selectedAnswer.value} <span>{obj.selectedAnswer.isRight ? <i className="fa fa-check text-green-700" aria-hidden="true"></i> : <i className="fa fa-times text-red-700" aria-hidden="true"></i>}</span></p>
                        {!obj.selectedAnswer.isRight &&  <p>Correct Answer: {findQuestion(obj.Qno,categoryName)?.answer.find(obj=>obj.isRight===true)?.value} </p>}
                    </li>
                })}
            </ul>
            
        </div>
    </div>
}