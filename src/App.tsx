import React from 'react'
import Navbar from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { Routes, Route } from "react-router-dom";
import { Rules } from './pages/Rules';
import { NotFound } from "./pages/NotFound"
import { ShowQuestions } from './pages/ShowQuestions';
import { FinalScore } from './pages/FinalScore';

export default function App(){
  return   <div className="App">
    <Navbar />
    <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/rules/:categoryName" element={ <Rules /> } ></Route>
        <Route path="/*" element={<NotFound />}></Route>
        <Route path="/:categoryName" element={<ShowQuestions />}></Route>
        <Route path="/:categoryName/finalscore" element={<FinalScore />}></Route>
      </Routes>
    </div>

}

