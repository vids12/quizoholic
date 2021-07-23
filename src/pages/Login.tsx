import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { userStatus } from "../constants/userStatus";
import { login } from "../utils/login";
import { Alert } from "../components/Alert";
import { Spinner } from "../components/Spinner";
import { useAuth } from "../dataProvider/context/Auth/AuthProvider";

export function Login() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [ errorMessage,setErrorMessage ] = useState<string>("");
    const [ loading,setLoading ] = useState<userStatus>(userStatus.IDLE);
    const navigate = useNavigate();
    const { setLoginStatus } =  useAuth();

    async function handleSubmit(){
        try{
            setErrorMessage("");
            setLoading(userStatus.LOADING);
            await login(emailRef.current!.value,passwordRef.current!.value);
            setLoading(userStatus.SUCCESS);
            setLoginStatus(true);
            navigate("/");
        }catch(error){
            setLoading(userStatus.ERROR);
            if(error.code === "auth/user-not-found"){
                return setErrorMessage("Invalid Credentials. Try again!")
            }
            return setErrorMessage(error.message);
        }       
    }

    return <div>
        {loading === userStatus.LOADING && <Spinner />}
        {loading !== userStatus.LOADING && <div className="py-20 h-screen bg-gray-200 px-2">
                <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-md">
                    <div className="md:flex">
                        <div className="w-full p-3 px-6 py-10">
                            <div className="text-center"> <span className="text-xl text-gray-700">Log In</span> </div>
                            {loading === userStatus.ERROR && <Alert message = {errorMessage} />}
                            <div className="mt-4 relative">
                                <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">Email</span>
                                <input type="email" ref={emailRef} className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-indigo-600" />
                            </div>
                            <div className="mt-4 relative"> 
                                <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">Password</span> <input type="password" ref={passwordRef} className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-indigo-600" /> 
                            </div>
                            <div className="mt-4"> 
                                <button className="h-12 w-full bg-indigo-600 text-white rounded hover:bg-indigo-700" onClick={()=>handleSubmit()}>Log In</button>
                            </div>
                            <div className="mt-4 text-center">
                                Don't have an account? <Link to="/signup" className="text-indigo-500 underline">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
    </div>
}