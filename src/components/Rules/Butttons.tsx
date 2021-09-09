import { useParams, Link } from 'react-router-dom'

export function Buttons() {
  const { categoryName } = useParams()
  return (
    <div>
      <Link to="/">
        <button className="px-6 py-1 text-indigo-500 text-center font-extrabold rounded-full cursor-pointer m-3 md:absolute md:left-50 md:bottom-50 hover:bg-indigo-500 hover:text-white flex-row focus:outline-none">
          Cancel
        </button>
      </Link>
      <Link to={`/${categoryName}`}>
        <button className="bg-indigo-500 px-6 py-1 text-white text-center font-extrabold rounded-full cursor-pointer m-3 md:absolute md:bottom-50 md:left-2/4 flex-row focus:outline-none">
          Start Quiz
        </button>
      </Link>
    </div>
  )
}
