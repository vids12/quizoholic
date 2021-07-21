import { Link } from "react-router-dom";

export function HomePage(){
    return  <div className="max-w-full">
        <section className="text-center text-purple-900 m-2">
            <h1 className="text-4xl font-extrabold tracking-wide">How much you know about India?</h1>
            <h2 className="text-2xl p-4 font-semibold italic">Let's play a quiz!!</h2>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-x-8 gap-y-4 justify-center m-6">
            <div className="shadow border p-6 bg-purple-300 border-indigo-800">
                <h1 className="p-3 text-2xl">Food</h1>
                <Link to="/rules/food"><button className="bg-indigo-500 px-6 py-1 text-white text-center font-extrabold rounded-full cursor-pointer">Play</button></Link>
            </div>
            <div className="shadow border p-6 bg-purple-300 border-indigo-800">
                <h1 className="p-3 text-2xl">Dance</h1>
                <Link to ="/rules/dance"><button className="bg-indigo-500 px-6 py-1 text-white text-center font-extrabold rounded-full cursor-pointer">Play</button></Link>
            </div>
            <div className="shadow border p-6 bg-purple-300 border-indigo-800">
                <h1 className="p-3 text-2xl">Heritage</h1>
                <Link to="/rules/heritage"><button className="bg-indigo-500 px-6 py-1 text-white text-center font-extrabold rounded-full cursor-pointer">Play</button></Link>
            </div>
            <div className="shadow border p-6 bg-purple-300 border-indigo-800">
                <h1 className="p-3 text-2xl">Literature</h1>
                <Link to="/rules/literature"><button className="bg-indigo-500 px-6 py-1 text-white text-center font-extrabold rounded-full">Play</button></Link>
            </div>
            <div className="shadow border p-6 bg-purple-300 border-indigo-800">
                <h1 className="p-3 text-2xl">History</h1>
                <Link to="/rules/history"><button className="bg-indigo-500 px-6 py-1 text-white text-center font-extrabold rounded-full cursor-pointer">Play</button></Link>
            </div>
            <div className="shadow border p-6 bg-purple-300 border-indigo-800">
                <h1 className="p-3 text-2xl">Geography</h1>
                <Link to="/rules/geography"><button className="bg-indigo-500 px-6 py-1 text-white text-center font-extrabold rounded-full cursor-pointer">Play</button></Link>
            </div>
        </div>
    </div>
}