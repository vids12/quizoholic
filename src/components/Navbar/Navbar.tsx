import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuiz } from "../../dataProvider/context/Quiz/QuizProvider";
import { Dropbox } from "./Dropbox";

export default function Navbar() {
  const [user,setUser] = useState<boolean>(false);
  const { dispatch: scoreDispatch } = useQuiz();

  return <nav className="bg-indigo-600 md:h-14 h-20 rounded-bl-lg flex justify-between items-center relative">
    <Link to="/" className="text-white text-3xl p-2 font-extrabold cursor-pointer" onClick = {()=> scoreDispatch({type: "NIL_SCORE"})}>Quizoholic</Link>
    <i className="fa fa-user-circle text-5xl text-white cursor-pointer p-2 mr-4 inline-block" aria-hidden="true" onClick={() => setUser(!user)}></i>
    {user && <Dropbox />}
  </nav>
}