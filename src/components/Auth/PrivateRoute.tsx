import { useAuth } from "../../dataProvider/context/Auth/AuthProvider";
import { Navigate, Route } from "react-router-dom";

export function PrivateRoute({path,...props}: any) {
    const { loginStatus } = useAuth();
    return loginStatus ? <Route  path={path} {...props}/> : <Navigate state={{from: path}} replace to="/login" />
}