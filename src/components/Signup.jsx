import React, { useState } from 'react'

function Signup() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setfullname] = useState("");
    const [resultData, setResultData] = useState("REGISTER USER");

const submitHandler = async()=>{
    try {
        const data = {
            username,
            email,
            fullname,
            password,
        }
        console.log(data)
        // Sending request to backend
        const response = await fetch("http://localhost:8001/users/register",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
        const result = await response.json();
        console.log(result)
        setResultData(result.message)
    } catch (error) {
        console.log("Found Error in submitHandler:-", error)
    }
}

  return (
    <div className='w-full h-[70vh] bg-gray-300'>
      <h1 className='text-center pt-5 text-1xl font-bold'>{resultData}</h1>
      <div className='flex flex-col gap-y-3 items-center'>
        {/* Username */}
        <div className='flex w-full justify-center gap-x-2 mt-3'>
            <label htmlFor="username" className='pt-1'>Username</label>
            <input type="text"
            value={username}
            className="w-[50vw] border border-gray-400 rounded-lg px-3 duration-150 bg-white/20 py-1.5"
            onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        {/* Email */}
        <div className='flex w-full justify-center gap-x-2 mt-1'>
            <label htmlFor="Email" className='pt-1'>Email:  </label>
            <input type="email"
            value={email}
            className="w-[50vw] border border-gray-400 rounded-lg px-3 duration-150 bg-white/20 py-1.5"
            onChange={(e)=> setEmail(e.target.value)}
            />
        </div>
        {/* fullname */}
        <div className='flex w-full justify-center gap-x-2 mt-1'>
            <label htmlFor="fullname" className='pt-1'>fullname:</label>
            <input type="text"
            value={fullname}
            className="w-[50vw] border border-gray-400 rounded-lg px-3 duration-150 bg-white/20 py-1.5"
            onChange={(e)=> setfullname(e.target.value)}
            />
        </div>
        {/* Password */}
        <div className='flex w-full justify-center gap-x-2 mt-1'>
            <label htmlFor="password" className='pt-1'>Password</label>
            <input type="text"
            value={password}
            className="w-[50vw] border border-gray-400 rounded-lg px-3 duration-150 bg-white/20 py-1.5"
            onChange={(e)=> setPassword(e.target.value)}
            />
        </div>
        {/* Create User Button */}
        <div className='flex w-full justify-center gap-x-2 mt-1'>
            <button className='w-[15vw] bg-blue-500 text-white rounded-lg p-2 mt-2 items-center'
            type='button'
            onClick={submitHandler}
            >Create User</button> 
        </div>
      </div>
    </div>
  )
}

export default Signup