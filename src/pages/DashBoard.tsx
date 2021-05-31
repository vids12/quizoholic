import { useParams } from "react-router";
import { useQuiz } from "../dataProvider/QuizProvider"
import { findQuestion } from "../utils/findQuestion";

export function DashBoard(){
    const { categoryName } = useParams();
    const { userAnswers } = useQuiz();
    console.log(userAnswers);
    return <div className="text-center bg-gradient-to-r from-indigo-400 to-purple-500 ">
        <h1 className="font-bold text-3xl text-white p-4">Your Answers</h1>
        <ul>
            {userAnswers?.map(obj=>{
                return <li className="border-gray-500 border-0 m-4 bg-gray-200 p-2 rounded-lg bg-opacity-50 shadow-sm">
                    <p className="font-bold"><span>{obj.Qno}. </span>{findQuestion(obj.Qno,categoryName)?.text}</p>
                    <p className="p-2 ">Your Answer: {obj.selectedAnswer.value} <span className="text-red-700">{!obj.selectedAnswer.isRight && <i className="fa fa-times" aria-hidden="true"></i>}</span></p>
                    {!obj.selectedAnswer.isRight &&  <p>Correct Answer: {findQuestion(obj.Qno,categoryName)?.answer.find(obj=>obj.isRight===true)?.value} </p>}
                </li>
            })}
        </ul>
    </div>
}