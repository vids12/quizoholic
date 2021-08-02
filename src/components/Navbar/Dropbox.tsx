import { logout } from '../../utils/logout'
import { Link } from 'react-router-dom'
import { useAuth } from '../../dataProvider/context/Auth/AuthProvider'

export function Dropbox() {
  const { currentUser, loginStatus, setLoginStatus } = useAuth()
  async function logoutHandler() {
    try {
      await logout()
      localStorage.removeItem('userLogin')
      setLoginStatus(false)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="flex flex-col absolute right-0 md:top-14 bg-indigo-800 top-20 text-white font-semibold p-4 md:p-6 rounded-lg z-10 w-3/5 md:w-1/5">
      <p className="font-bold text-lg md:font-extrabold p-1 md:p-3 w-min">
        {loginStatus ? `Signed in as ${currentUser?.email}` : 'Please Log In'}
      </p>
      <hr />
      <Link to="/login" className="p-2 hover:underline">
        Login
      </Link>
      <Link to="/signup" className="p-2 hover:underline">
        Sign Up
      </Link>
      <Link to="/profile" className="p-2 hover:underline">
        Profile
      </Link>
      <button
        onClick={() => logoutHandler()}
        className="m-0 bg-indigo-900 p-2 font-bold text-base focus:outline-none"
      >
        Log Out
      </button>
    </div>
  )
}
