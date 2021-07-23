import { auth } from "../firebase/firebase";


export  function logout() {
    return auth.signOut();
}
