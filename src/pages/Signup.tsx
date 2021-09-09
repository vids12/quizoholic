import { useRef, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Alert } from '../components/index'
import { userStatus } from '../constants/userStatus'
import { signup } from '../utils/signup'

export function Signup() {
  let emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const confirmPasswordRef = useRef<HTMLInputElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [loading, setLoading] = useState<userStatus>(userStatus.IDLE)
  const navigate = useNavigate()

  async function handleSubmit() {
    if (passwordRef.current?.value !== confirmPasswordRef.current?.value) {
      setLoading(userStatus.ERROR)
      return setErrorMessage('Passwords do not match')
    }
    try {
      setErrorMessage('')
      setLoading(userStatus.LOADING)
      await signup(
        emailRef.current!.value,
        passwordRef.current!.value,
        nameRef.current!.value,
      )
      setLoading(userStatus.SUCCESS)
    } catch (err) {
      setLoading(userStatus.ERROR)
      setErrorMessage(err.message)
    }
  }
  useEffect(() => {
    loading === userStatus.SUCCESS && navigate('/login')
  })

  return (
    <div className="py-20 h-screen bg-gray-200 px-2">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-md">
        <div className="md:flex">
          <div className="w-full p-3 px-6 py-10">
            <div className="text-center">
              <span className="text-xl text-gray-700">Registration Form</span>
            </div>
            {loading === userStatus.ERROR && <Alert message={errorMessage} />}
            <div className="mt-3 relative">
              <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 z-0">
                Name
              </span>
              <input
                type="text"
                ref={nameRef}
                className="h-12 px02 w-full border-2 rounded focus:outline-none focus:border-indigo-600"
              />
            </div>
            <div className="mt-4 relative">
              <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">
                Email
              </span>
              <input
                type="email"
                ref={emailRef}
                className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-indigo-600"
              />
            </div>
            <div className="mt-4 relative">
              <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">
                Password
              </span>
              <input
                type="password"
                ref={passwordRef}
                placeholder="at least 6 characters"
                className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-indigo-600"
              />
            </div>
            <div className="mt-4 relative">
              <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">
                Confirm Password
              </span>
              <input
                type="password"
                ref={confirmPasswordRef}
                className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-indigo-600"
              />
            </div>
            <div className="mt-4">
              <button
                className="h-12 w-full bg-indigo-600 text-white rounded hover:bg-indigo-700"
                onClick={() => handleSubmit()}
                disabled={loading === userStatus.LOADING}
              >
                Sign Up
              </button>
            </div>
            <div className="mt-4 text-center">
              Already have an account?
              <Link to="/login" className="text-indigo-500 underline">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
