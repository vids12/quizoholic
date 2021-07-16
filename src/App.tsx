import Navbar from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import { Rules } from './pages/Rules';
import { NotFound } from './pages/NotFound'
import { ShowQuestions } from './pages/ShowQuestions';
import { FinalScore } from './pages/FinalScore';
import { DashBoard } from './pages/DashBoard';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { PrivateRoute } from './components/Auth/PrivateRoute';

export default function App(){
  return   <div className="App">
    <Navbar />
    <Routes>
        <PrivateRoute path="/" element={<HomePage />}></PrivateRoute>
        <PrivateRoute path="/rules/:categoryName" element={ <Rules /> } ></PrivateRoute>
        <Route path="/*" element={<NotFound />}></Route>
        <Route path="/:categoryName" element={<ShowQuestions />}></Route>
        <Route path="/:categoryName/finalscore" element={<FinalScore />}></Route>
        <Route path="/:categoryName/dashboard" element={<DashBoard />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <PrivateRoute path="/profile" element={<Profile />}></PrivateRoute>
      </Routes>
    </div>

}

