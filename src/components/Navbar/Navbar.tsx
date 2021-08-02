import { useState } from 'react'
import { Dropbox, NavBrand } from '../index'

export function Navbar() {
  const [user, setUser] = useState<boolean>(false)
  return (
    <nav className="bg-indigo-600 md:h-14 h-20 rounded-bl-lg flex justify-between items-center relative">
      <NavBrand />
      <i
        className="fa fa-user-circle text-5xl text-white cursor-pointer p-2 mr-4 inline-block"
        aria-hidden="true"
        onClick={() => setUser(!user)}
      ></i>
      {user && <Dropbox />}
    </nav>
  )
}
