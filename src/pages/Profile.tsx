import { USerGrid } from "../components/Auth/UserGrid";
import { useAuth } from "../dataProvider/context/Auth/AuthProvider";

export function Profile(){
    const { currentUser }: any= useAuth();
    return <div>
        <h4 className="text-center text-indigo-600 text-4xl m-2 tracking-widest">
            My Profile
        </h4>
        <p className="text-lg m-4">Name: {currentUser?.displayName}</p>
        <p className="text-lg m-4">Email: {currentUser?.email}</p>
        <USerGrid />
    </div>
}