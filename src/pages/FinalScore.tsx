import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAuth } from '../dataProvider/context/Auth/AuthProvider'
import { useQuiz } from '../dataProvider/context/Quiz/QuizProvider'
import { userData } from '../firebase/firebase'

export function FinalScore() {
  const { categoryName } = useParams()
  const { currentUser } = useAuth()
  const { state, dispatch: scoreDispatch } = useQuiz()
  useEffect(() => {
    ;(async function () {
      try {
        const response = await userData.doc(currentUser?.uid).get()
        const obj = response.get(`${categoryName}`)
        if (obj.highestScore < state.score) {
          const toModifyReponse = await userData.doc(currentUser?.uid)
          return toModifyReponse.update(
            `${categoryName}.highestScore`,
            state.score,
          )
        }
      } catch (error) {
        console.error(error)
      }
    })()
  })
  return (
    <div className="text-center">
      <h2 className="m-10 font-extrabold text-4xl text-center">
        Your final score:
      </h2>
      <h1 className="text-6xl mb-4">{state.score}/25</h1>
      <div>
        <Link
          to={`/${categoryName}`}
          className="bg-indigo-500 px-6 py-1 text-white text-center font-extrabold rounded-full cursor-pointer m-4 focus:outline-none"
        >
          <button onClick={() => scoreDispatch({ type: 'NIL_SCORE' })}>
            Play Again
          </button>
        </Link>
        <Link
          to="/"
          className="bg-indigo-500 px-6 py-1 text-white text-center font-extrabold rounded-full cursor-pointer m-4 focus:outline-none"
        >
          <button onClick={() => scoreDispatch({ type: 'NIL_SCORE' })}>
            Go to Home
          </button>
        </Link>
      </div>

      <Link
        to={`/${categoryName}/dashboard`}
        className="text-indigo-500 underline"
      >
        Show Dashboard
      </Link>
    </div>
  )
}
