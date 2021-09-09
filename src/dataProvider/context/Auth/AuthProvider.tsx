import  React, { createContext, useState, useContext, useEffect, Dispatch } from 'react';
import { ProviderProp } from '../Quiz/QuizProvider.types';
import { auth } from "../../../firebase/firebase";
import firebase from 'firebase';

type AuthContextType = {
    currentUser : firebase.User | null,
    loginStatus: boolean,
    setLoginStatus: Dispatch<React.SetStateAction<boolean>>
}

const AuthContext = createContext<AuthContextType>({currentUser: null, loginStatus: false,setLoginStatus: prev => !prev});

export function AuthProvider({children}: ProviderProp){
    const [currentUser,setCurrentUser] = useState<firebase.User | null>(null);
    const [loginStatus,setLoginStatus] = useState<boolean>(false);

    useEffect(() => { 
        const unsubscribe = auth.onAuthStateChanged((user) => {
            const storedUserLogin = localStorage.getItem("userLogin");
            if(typeof storedUserLogin === "string"){
                const { email,login } = JSON.parse(storedUserLogin);
                login && setLoginStatus(true);
                email && setCurrentUser(user);
            }
        });
        return unsubscribe;
    },[]); 
    return <AuthContext.Provider value={{currentUser,loginStatus,setLoginStatus}}>
        {children}
    </AuthContext.Provider>
}

export function useAuth(){
    return  useContext(AuthContext);
}
