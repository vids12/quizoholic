import { auth, userData } from "../firebase/firebase";

export async function signup(email: string ,password: string,name: string)
{
    localStorage.removeItem("userLogin");
    const response = await auth.createUserWithEmailAndPassword(email,password);
    response?.user?.updateProfile({displayName: name});
    userData.doc(response.user?.uid).set({
        food: {
            highestScore: 0,
            attempted: 0
        },
        history: {
            highestScore: 0,
            attempted: 0
        },
        dance: {
            highestScore: 0,
            attempted: 0
        },
        heritage: {
            highestScore: 0,
            attempted: 0
        },
        geography: {
            highestScore: 0,
            attempted: 0
        },
        literature: {
            highestScore: 0,
            attempted: 0
        }
    })
    return response;
}