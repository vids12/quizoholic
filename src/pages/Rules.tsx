import { Buttons, List } from '../components/index'

export function Rules() {
  return (
    <div className="py-20 h-screen bg-gray-200 px-2">
      <div className="max-w-md md:h-72 mx-auto bg-white rounded-lg shadow-2xl overflow-hidden md:max-w-md">
        <div className="w-full p-3 px-6 py-10">
          <h4 className="text-center text-indigo-600 text-4xl m-2 tracking-widest">
            Rules
          </h4>
          <List />
          <Buttons />
        </div>
      </div>
    </div>
  )
}
