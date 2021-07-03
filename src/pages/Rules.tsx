import { useParams } from "react-router";
import { Link } from "react-router-dom";

export function Rules(){
    const { categoryName } = useParams()
    return <div className="py-20 h-screen bg-gray-200 px-2">
        <div className="max-w-md md:h-72 mx-auto bg-white rounded-lg shadow-2xl overflow-hidden md:max-w-md">
            <div className="w-full p-3 px-6 py-10">
                <h4 className="text-center text-indigo-600 text-4xl m-2 tracking-widest">
                    Rules
                </h4>
                <ul className="list-disc list-inside m-2">
                    <li>There are 5 questions on India's {categoryName}.</li>
                    <li>For every correct answer, 5 points are <span className="text-green-500">granted</span>.</li>
                    <li>For every incorrect answer, 2 points will be <span className="text-red-600">deducted</span>.</li>
                    <li>You can skip the question.</li>
                </ul>
                <Link to = "/"><button className="px-6 py-1 text-indigo-500 text-center font-extrabold rounded-full cursor-pointer m-3 md:absolute md:left-50 md:bottom-50 hover:bg-indigo-500 hover:text-white flex-row">Cancel</button></Link>
                <Link to = {`/${categoryName}`}><button className="bg-indigo-500 px-6 py-1 text-white text-center font-extrabold rounded-full cursor-pointer m-3 md:absolute md:bottom-50 md:left-2/4 flex-row">Start Quiz</button></Link>
            </div>
        </div>  
    </div>
}




