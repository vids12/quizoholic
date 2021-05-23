import { useState } from "react";
import { useParams } from "react-router";
import { findQuestion } from "../utils/findQuestion";
import { useQuiz } from "../dataProvider/QuizProvider";
import { Link } from "react-router-dom";

export function ShowQuestions() {
  const { categoryName } = useParams();
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  // const [ ans,setAns ] = useState(false);
  const [qno, setQno] = useState<number>(1);
  const question = findQuestion(qno,categoryName);
  const { dispatch: scoreDispatch  } = useQuiz();

  return (
    <div className="App">
      <h4 className="m-4 font-extrabold">
        <span>{question?.questionNo}. </span>
        {question?.text}
      </h4>
      <ul className="m-4">
        {question?.answer.map((obj) => {
          return (
            <li 
              className={
                    showAnswer
                  ? obj.isRight
                    ? "bg-green-600 text-white m-4 p-4 rounded-lg"
                    : "bg-red-600 text-white m-4 p-4 rounded-lg"
                  : "border-gray-500 text-black m-4 p-4 rounded-lg"
              }
              onClick={() => {
                obj.isRight ? scoreDispatch({type: "INCREEMENT_SCORE",payload: question?.points }) : scoreDispatch({type: "DECREEMENT_SCORE",payload: question?.negativePoints });
                setShowAnswer(true);
              }}
            >
              {obj.value}
            </li>
          );
        })}
      </ul>
      {qno === 5 ||
        (qno < 5 && (
            <button
              onClick={() => {
                setQno((prev) => prev + 1);
                setShowAnswer(false);
              }}
              className="bg-indigo-500 px-6 py-1 text-white text-center font-extrabold rounded-full cursor-pointer m-4"
            >
              Next
            </button>
        ))}
      {qno === 5 && (
        <Link to={`/${categoryName}/finalscore`}><button
        className="bg-indigo-500 px-6 py-1 text-white text-center font-extrabold rounded-full cursor-pointer m-2"
      >
        Final Score
      </button></Link>
      )}
    </div>
  );
}
