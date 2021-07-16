import { auth } from "../firebase/firebase";

export async function signup(email: string ,password: string,name: string)
{
    localStorage.removeItem("userLogin");
    const response = await auth.createUserWithEmailAndPassword(email,password);
    response?.user?.updateProfile({displayName: name});
    return response;
}