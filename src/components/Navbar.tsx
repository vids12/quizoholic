import { useState } from "react";
import { Link } from "react-router-dom";
import { Dropbox } from "./Navbar/Dropbox";

export default function Navbar() {
  const [user,setUser] = useState<boolean>(false);

  return <nav className="bg-indigo-600 md:h-14 h-20 rounded-bl-lg flex justify-between items-center relative">
    <Link to="/" className="text-white text-3xl p-2 font-extrabold cursor-pointer">Quizoholic</Link>
    <div><i className="fa fa-user-circle text-5xl text-white cursor-pointer p-2 mr-4 inline-block" aria-hidden="true" onClick={() => setUser(!user)}></i></div>
    {user && <Dropbox />}
  </nav>
}