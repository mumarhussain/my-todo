import React from 'react'
import image from '../Assets/Logo.png'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
function Login() {
  const navigate2 = useNavigate();
  const todoPage = () => {
    navigate2('todo')
  }
  return (
    <div>
      <div className='mx-auto bg-blue-400 h-[100vh] '>
        <img src={image} className='w-[40%] py-4 md:w-52 mx-4' />
        <div className='flex flex-col justify-center items-center md:w-[35%] md:bg-white md:m-auto md:py-6 md:border-2 md:border-white md:rounded-md md:shadow-lg'>
          <h1 className='text-2xl text-white font-bold mx-auto mb-6 md:text-blue-600'>
            Welcome To TOPSOL
          </h1>
          <input type="email" placeholder='Enter email here ' className=' border-2 border-white rounded-md my-2  px-3 py-1 w-72  shadow-md pb-1  md:w-[65%] md:py-2' />
          <input type="password" placeholder='Enter password here ' className=' border-2 border-white rounded-md my-2  px-3 py-1 w-72  shadow-md pb-1  md:w-[65%] md:py-2' />
          <button onClick={todoPage} className='border-2 rounded px-2 py-1 bg-white border-white text-blue-600 font-bold flex justify-center items-center mt-5  md:bg-blue-600 md:border-blue-600 md:text-white'>Login</button>
          <br />
          <p>If you are new please<Link to='/signup' className='text-blue-600'> signup</Link> first</p>
        </div>
      </div>
    </div>
  )
}

export default Login
