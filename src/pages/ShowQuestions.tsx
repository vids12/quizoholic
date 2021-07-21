import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useQuiz } from "../dataProvider/context/Quiz/QuizProvider";
import { Link } from "react-router-dom";
import firebase from "../firebase/firebase";
import { Question } from "../data/quiz.types";
import { Spinner } from "../components/Spinner";
import { userStatus } from "../constants/userStatus";
import { useAuth } from "../dataProvider/context/Auth/AuthProvider";
import { userData } from "../firebase/firebase";
import "firebase/firestore";

export function ShowQuestions() {
  const { categoryName } = useParams();
  const [showAnswer, setShowAnswer] = useState<string | number>("");
  const [qno, setQno] = useState<number>(1);
  const [quizData,setQuizData] = useState<Question>();
  const { dispatch: scoreDispatch } = useQuiz();
  const [status, setStatus] = useState<userStatus>(userStatus.LOADING);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { currentUser } = useAuth();
  const increment = firebase.firestore.FieldValue.increment(1);

  useEffect(()=>{
    let isCanceled = false;
    (async function (){
      try{    
        if(!isCanceled){
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
              setQuizData(categoryData.question.find((obj: {questionNo: Number; })=> obj.questionNo === qno));
            }
          )
        }
      }catch(error){
        if(!isCanceled){
          setStatus(userStatus.ERROR)
          setErrorMessage(error);
          console.error(error.message);
        }
      }
      
    })();
    return () => {
      isCanceled = true;
    }
  },[quizData,categoryName,qno]);
  async function attemptHandler() {
    try{
          
          const response = await userData.doc(currentUser?.uid);
          return response.update(`${categoryName}.attempted`,increment);
    }catch(error){
      console.error(error.message);
    }         
  }
  return (
    <div>
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
                obj.isRight ? scoreDispatch({type: "INCREEMENT_SCORE",payload: { points: quizData?.points,answer:{ Qno:qno, selectedAnswer: obj} }}) : scoreDispatch({type: "DECREEMENT_SCORE",payload: { points: quizData?.negativePoints,answer:{ Qno:qno, selectedAnswer: obj} }});
                setShowAnswer(obj.value);
              }}
              // disabled={!!showAnswer}
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
        className="bg-indigo-500 px-6 py-1 text-white text-center font-extrabold rounded-full cursor-pointer m-2" onClick={() => attemptHandler()}
      >
        Final Score
      </button></Link>
      )}</div>}
    </div>
  );
}
