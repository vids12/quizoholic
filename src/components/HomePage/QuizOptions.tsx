import { Link } from 'react-router-dom'

export function QuizOptions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  gap-x-8 gap-y-4 justify-center m-6">
      <div className="shadow border p-6 bg-purple-300 border-indigo-800">
        <h1 className="p-3 text-2xl">Food</h1>
        <Link to="/rules/food">
          <button className="bg-indigo-500 px-6 py-1 text-white text-center font-extrabold rounded-full cursor-pointer focus:outline-none">
            Play
          </button>
        </Link>
      </div>
      <div className="shadow border p-6 bg-purple-300 border-indigo-800">
        <h1 className="p-3 text-2xl">Dance</h1>
        <Link to="/rules/dance">
          <button className="bg-indigo-500 px-6 py-1 text-white text-center font-extrabold rounded-full cursor-pointer focus:outline-none">
            Play
          </button>
        </Link>
      </div>
      <div className="shadow border p-6 bg-purple-300 border-indigo-800">
        <h1 className="p-3 text-2xl">Heritage</h1>
        <Link to="/rules/heritage">
          <button className="bg-indigo-500 px-6 py-1 text-white text-center font-extrabold rounded-full cursor-pointer focus:outline-none">
            Play
          </button>
        </Link>
      </div>
      <div className="shadow border p-6 bg-purple-300 border-indigo-800">
        <h1 className="p-3 text-2xl">Literature</h1>
        <Link to="/rules/literature">
          <button className="bg-indigo-500 px-6 py-1 text-white text-center font-extrabold rounded-full focus:outline-none">
            Play
          </button>
        </Link>
      </div>
      <div className="shadow border p-6 bg-purple-300 border-indigo-800">
        <h1 className="p-3 text-2xl">History</h1>
        <Link to="/rules/history">
          <button className="bg-indigo-500 px-6 py-1 text-white text-center font-extrabold rounded-full cursor-pointer focus:outline-none">
            Play
          </button>
        </Link>
      </div>
      <div className="shadow border p-6 bg-purple-300 border-indigo-800">
        <h1 className="p-3 text-2xl">Geography</h1>
        <Link to="/rules/geography">
          <button className="bg-indigo-500 px-6 py-1 text-white text-center font-extrabold rounded-full cursor-pointer focus:outline-none">
            Play
          </button>
        </Link>
      </div>
    </div>
  )
}
