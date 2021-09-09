import { Navbar, PrivateRoute } from './components/index'
import {
  HomePage,
  Rules,
  NotFound,
  ShowQuestions,
  FinalScore,
  DashBoard,
  Signup,
  Login,
  Profile,
} from './pages/index'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <PrivateRoute path="/" element={<HomePage />}></PrivateRoute>
        <PrivateRoute
          path="/rules/:categoryName"
          element={<Rules />}
        ></PrivateRoute>
        <Route path="/*" element={<NotFound />}></Route>
        <Route path="/:categoryName" element={<ShowQuestions />}></Route>
        <Route
          path="/:categoryName/finalscore"
          element={<FinalScore />}
        ></Route>
        <Route path="/:categoryName/dashboard" element={<DashBoard />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <PrivateRoute path="/profile" element={<Profile />}></PrivateRoute>
      </Routes>
    </div>
  )
}
