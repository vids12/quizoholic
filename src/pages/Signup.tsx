export function Signup() {
    return <div className="py-20 h-screen bg-gray-200 px-2">
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-md">
            <div className="md:flex">
                <div className="w-full p-3 px-6 py-10">
                    <div className="text-center"> <span className="text-xl text-gray-700">Registration Form</span> </div>
                    <div className="mt-3 relative">
                        <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400">First Name</span>
                        <input type="text" className="h-12 px02 w-full border-2 rounded focus:outline-none focus:border-indigo-600" />
                    </div>
                    <div className="mt-4 relative">
                        <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400">Last name</span>
                        <input type="text" className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-indigo-600" />
                    </div>
                    <div className="mt-4 relative">
                        <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">Email</span>
                        <input type="email" className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-indigo-600" />
                    </div>
                    <div className="mt-4 relative"> 
                        <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">Password</span> <input type="text" className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-indigo-600" /> 
                    </div>
                    <div className="mt-4 relative"> 
                        <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">Confirm Password</span> <input type="text" className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-indigo-600" /> 
                    </div>
                    <div className="mt-4"> 
                        <button className="h-12 w-full bg-indigo-600 text-white rounded hover:bg-indigo-700">Sign Up</button>
                    </div>
                    <div className="mt-4 text-center">
                        Already had an account? <span> Log In</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
}