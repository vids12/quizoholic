import { Link, useParams } from "react-router-dom";
import { useQuiz } from "../dataProvider/context/Quiz/QuizProvider";

export function FinalScore(){
    const { categoryName } = useParams();
    const { state,dispatch:scoreDispatch,setUserAnswer } = useQuiz();
    function buttonHandler(){
        scoreDispatch({type: "NIL_SCORE"});
        setUserAnswer([]);
    }
    return <div className="text-center">
        <h2 className="m-10 font-extrabold text-4xl text-center">Your final score:</h2>
        <h1 className="text-6xl mb-4">{state.score}/25</h1>
        <div>
            <Link to={`/${categoryName}`} className="bg-indigo-500 px-6 py-1 text-white text-center font-extrabold rounded-full cursor-pointer m-4">
                <button onClick={buttonHandler}>Play Again</button>
            </Link>
            <Link to="/" className="bg-indigo-500 px-6 py-1 text-white text-center font-extrabold rounded-full cursor-pointer m-4"> 
                <button onClick={buttonHandler}>Go to Home</button>
            </Link>
        </div>

        <Link to={`/${categoryName}/dashboard`} className="text-indigo-500 underline">Show Dashboard</Link>
    </div>
}