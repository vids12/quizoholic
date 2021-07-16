import  { createContext, useState, useContext, useEffect } from 'react';
import { ProviderProp } from '../Quiz/QuizProvider.types';
import { auth } from "../../../firebase/firebase";
import firebase from 'firebase';

type AuthContextType = {
    currentUser : firebase.User | null,
    loginStatus: boolean
}

const AuthContext = createContext<AuthContextType>({currentUser: null, loginStatus: false});

export function AuthProvider({children}: ProviderProp){
    const [currentUser,setCurrentUser] = useState<firebase.User | null>(null);
    const [loginStatus,setLoginStatus] = useState<boolean>(false);

    useEffect(() => { 
        const unsubscribe = auth.onAuthStateChanged((user) => {
            const storedUserLogin = localStorage.getItem("userLogin");
            if(typeof storedUserLogin === "string"){
                const { email,login } = JSON.parse(storedUserLogin);
                setLoginStatus(login);
                setCurrentUser(email === user?.email ? user : null);
            }
            else{
                console.log("User",user);
                setLoginStatus(false);
                setCurrentUser(null);
            }
        });
        return unsubscribe;
    },[]); 
    console.log("useEfect k bahar",currentUser);
    return <AuthContext.Provider value={{currentUser,loginStatus}}>
        {children}
    </AuthContext.Provider>
}

export function useAuth(){
    return  useContext(AuthContext);
}
