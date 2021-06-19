import { useParams } from "react-router";
import { Link } from "react-router-dom";

export function Rules(){
    const { categoryName } = useParams()
    return <div className="shadow-2xl h-120 w-3/4 md:h-60 md:w-2/4  border-grey-200 relative md:-bottom-40 md:inset-x-56 border top-40 left-10">
        <h4 className="text-center text-indigo-600 text-4xl m-2 tracking-widest">Rules</h4>
        <ul className="list-disc list-inside m-2">
            <li>There are 5 questions on India's {categoryName}.</li>
            <li>For every correct answer, 5 points are <span className="text-green-500">granted</span>.</li>
            <li>For every incorrect answer, 2 points will be <span className="text-red-600">deducted</span>.</li>
            <li>You can skip the question.</li>
        </ul>
        <Link to = "/"><button className="px-6 py-1 text-indigo-500 text-center font-extrabold rounded-full cursor-pointer m-2 md:absolute md:left-5 md:bottom-5 hover:bg-indigo-500 hover:text-white flex-row">Cancel</button></Link>
        <Link to = {`/${categoryName}`}><button className="bg-indigo-500 px-6 py-1 text-white text-center font-extrabold rounded-full cursor-pointer m-2 md:absolute md:bottom-4 md:right-10 flex-row">Start Quiz</button></Link>
        
    </div>
}