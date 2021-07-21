import { useEffect, useState } from "react";
import { useAuth } from "../../dataProvider/context/Auth/AuthProvider"
import { userData } from "../../firebase/firebase";
import { UserData } from "./UserData.types";

export function USerGrid(){
    const { currentUser } = useAuth();
    const [showData,setShowData] = useState<UserData>();
    useEffect(()=>{
        let isCanceled = false;
        (async function () {
            try{
                if(!isCanceled){
                    const response =await userData.doc(currentUser?.uid).get();
                    setShowData({
                        food: response.get("food"),
                        heritage: response.get("heritage"),
                        history: response.get("history"),
                        literature: response.get("literature"),
                        dance: response.get("dance"),
                        geography: response.get("geography"),
                    });
                }
            }catch(error){
                if(!isCanceled){
                console.error(error.message);
                }
            }      
        })();
        return () => {
            isCanceled = true;
        }
    })
    return <div className="grid grid-cols-3 grid-rows-6 m-6 bg-indigo-900">
        <div className="font-bold rounded p-2 uppercase text-center m-1 bg-indigo-700 text-gray-100" >Categories</div>
        <div className="font-bold rounded p-2 uppercase text-center m-1 bg-indigo-700 text-gray-100" >Attempted</div>
        <div className="font-bold rounded p-2 uppercase text-center m-1 bg-indigo-700 text-gray-100">Highest Score</div>
        <div className="rounded m-1 text-lg text-gray-200 bg-indigo-400 p-1">Dance</div>
        <div className="rounded m-1 text-lg text-gray-200 bg-indigo-400 p-1 text-right">{showData?.dance.attempted}</div>
        <div className="rounded m-1 text-lg text-gray-200 bg-indigo-400 p-1 text-right">{showData?.dance.highestScore}</div>
        <div className="rounded m-1 text-lg text-gray-200 bg-indigo-400 p-1">Food</div>
        <div className="rounded m-1 text-lg text-gray-200 bg-indigo-400 p-1 text-right">{showData?.food.attempted}</div>
        <div className="rounded m-1 text-lg text-gray-200 bg-indigo-400 p-1 text-right">{showData?.food.highestScore}</div>
        <div className="rounded m-1 text-lg text-gray-200 bg-indigo-400 p-1">Geography</div>
        <div className="rounded m-1 text-lg text-gray-200 bg-indigo-400 p-1 text-right">{showData?.geography.attempted}</div>
        <div className="rounded m-1 text-lg text-gray-200 bg-indigo-400 p-1 text-right">{showData?.geography.highestScore}</div>
        <div className="rounded m-1 text-lg text-gray-200 bg-indigo-400 p-1">Heritage</div>
        <div className="rounded m-1 text-lg text-gray-200 bg-indigo-400 p-1 text-right">{showData?.heritage.attempted}</div>
        <div className="rounded m-1 text-lg text-gray-200 bg-indigo-400 p-1 text-right">{showData?.heritage.highestScore}</div>
        <div className="rounded m-1 text-lg text-gray-200 bg-indigo-400 p-1">History</div>
        <div className="rounded m-1 text-lg text-gray-200 bg-indigo-400 p-1 text-right">{showData?.history.attempted}</div>
        <div className="rounded m-1 text-lg text-gray-200 bg-indigo-400 p-1 text-right">{showData?.history.highestScore}</div>
        <div className="rounded m-1 text-lg text-gray-200 bg-indigo-400 p-1">Literature</div>
        <div className="rounded m-1 text-lg text-gray-200 bg-indigo-400 p-1 text-right">{showData?.literature.attempted}</div>
        <div className="rounded m-1 text-lg text-gray-200 bg-indigo-400 p-1 text-right">{showData?.literature.highestScore}</div>
    </div>  
}