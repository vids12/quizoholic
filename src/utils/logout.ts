import { auth } from "../firebase/firebase";


export  function logout() {
    localStorage.removeItem("userLogin");
    return auth.signOut();
}
