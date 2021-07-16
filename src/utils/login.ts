import { auth } from "../firebase/firebase";

export async function login(email: string,password: string){
    console.log("Login successfully");
    localStorage.setItem("userLogin",JSON.stringify({email: email,login: true}));
    return await auth.signInWithEmailAndPassword(email,password);
} 