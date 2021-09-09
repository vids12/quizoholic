import { Link } from 'react-router-dom'
import { useQuiz } from '../../dataProvider/context/Quiz/QuizProvider'

export function NavBrand() {
  const { dispatch: scoreDispatch } = useQuiz()
  return (
    <div>
      <Link
        to="/"
        className="text-white text-3xl p-2 font-extrabold cursor-pointer"
        onClick={() => scoreDispatch({ type: 'NIL_SCORE' })}
      >
        Quizoholic
      </Link>
    </div>
  )
}
