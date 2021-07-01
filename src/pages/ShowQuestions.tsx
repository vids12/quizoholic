import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useQuiz } from "../dataProvider/QuizProvider";
import { Link } from "react-router-dom";
import firebase from "../firebase/firebase";
import "firebase/firestore";
import { Question } from "../data/quiz.types";
import { Spinner } from "../components/Spinner";
import { userStatus } from "../constants/userStatus";

export function ShowQuestions() {
  const { categoryName } = useParams();
  const [showAnswer, setShowAnswer] = useState<string | number>("");
  const [qno, setQno] = useState<number>(1);
  const [quizData,setQuizData] = useState<Question>();
  const { dispatch: scoreDispatch,setUserAnswer,userAnswers  } = useQuiz();
  const [status, setStatus] = useState<userStatus>(userStatus.LOADING);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(()=>{
    (async function (){
      try{    
        const firebaseData = firebase.firestore().collection('quizoholic-quiz-data');
        const snapshot  = await firebaseData.get();
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }
        snapshot.forEach(( doc : any)=>
          {
            setErrorMessage('');
            setStatus(userStatus.LOADING);
            const categoryData = doc.data().category.find((obj: { categoryName: string; }) => obj.categoryName === categoryName);
            setStatus(userStatus.SUCCESS);
            return setQuizData(categoryData.question.find((obj: {questionNo: Number; })=> obj.questionNo === qno));
          }
        )
      }catch(error){
        setStatus(userStatus.ERROR)
        setErrorMessage(error);
        console.error(error.message);
      }
    })();
  },[quizData,categoryName,qno]);


  return (
    <div className="App">
      {console.log(status)}
      {status === userStatus.ERROR && <p>{errorMessage}</p>}
      {status === userStatus.LOADING && <Spinner />}
      {status === userStatus.SUCCESS && <div><h4 className="m-4 font-extrabold">
        <span>{quizData?.questionNo}. </span>
        {quizData?.text}
      </h4>
      <ul className="m-4">
        {quizData?.answer.map((obj,index) => {
          return (
            <li 
              key={index}
              className={
                  showAnswer === obj.value
                  ? obj.isRight
                    ? "bg-green-600 text-white m-4 p-4 rounded-lg"
                    : "bg-red-600 text-white m-4 p-4 rounded-lg"
                  : showAnswer && obj.isRight
                    ? "bg-green-600 text-white m-4 p-4 rounded-lg"
                    : "border-gray-500 text-black m-4 p-4 rounded-lg cursor-pointer"
              }
              onClick={() => {
                obj.isRight ? scoreDispatch({type: "INCREEMENT_SCORE",payload: quizData?.points }) : scoreDispatch({type: "DECREEMENT_SCORE",payload: quizData?.negativePoints });
                setShowAnswer(obj.value);
                setUserAnswer(userAnswers.concat({ Qno:qno, selectedAnswer: obj}))
              }}
            >
              {obj.value}
            </li>
          );
        })}
      </ul>
      {qno < 5 && (
            <button
              onClick={() => {
                setQno((prev) => prev + 1);
                setShowAnswer("");
              }}
              className="bg-indigo-500 px-6 py-1 text-white text-center font-extrabold rounded-full cursor-pointer m-4"
            >
              Next
            </button>
        )}
      {qno === 5 && (
        <Link to={`/${categoryName}/finalscore`}><button
        className="bg-indigo-500 px-6 py-1 text-white text-center font-extrabold rounded-full cursor-pointer m-2"
      >
        Final Score
      </button></Link>
      )}</div>}
    </div>
  );
}
