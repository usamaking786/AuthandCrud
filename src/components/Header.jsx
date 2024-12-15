import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='w-full bg-gray-600 text-white h-[50px]'>
     <div className='flex justify-center'>
     <Link to={"/"} className="p-3"><a className='text-white font-bold cursor-pointer'>Home</a></Link>
      <Link to={"/signup"} className="p-3"><a className='text-white font-bold cursor-pointer'>Signup</a></Link>
        <Link to={"/login"} className="p-3"><a className='text-white font-bold cursor-pointer'>Login</a></Link>
        <Link to={"/"} className="p-3"><a className='text-white font-bold cursor-pointer'>Logout</a> </Link>
          
    </div>        
    </div>
  )
}

export default Header