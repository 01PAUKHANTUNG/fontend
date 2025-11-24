import { motion } from 'framer-motion';
import React, { useState } from 'react'

const Login = () => {

  const [currentState, setCurrentState] = useState('Log In');

  const onSubmitHandle = (event)=>{
   event.preventDefault();
  }

  return (
    <div className='w-[95%] mx-auto'>
      <motion.div 
       initial={{opacity:0, y:0}}
         animate={{opacity:1, y:0}}
         transition={{
           delay:0.2,
           duration:1
         }}
      className='w-[300px] sm:w-[600px] px-6 py-4 mx-auto mb-9 '>

        <form onSubmit={onSubmitHandle}
        className='flex flex-col gap-2'>
          <p className='flex font-bold py-4 text-2xl items-center justify-center'>{currentState} </p>

          {currentState === 'Log In' ? '' : <div className='flex flex-col gap-2'>
            <label className='text-xl font-semibold' htmlFor='name'> Name</label>
            <input className='py-3 px-4 border-2 border-amber-500 rounded-lg' type='text' id='name' placeholder='Enter your name' required/>
          </div>
            }

           <div className='flex flex-col gap-2'>
            <label className='text-xl font-semibold' htmlFor='email'> Email</label>
            <input className='py-3 px-4 border-2 border-amber-500 rounded-lg' type='email' id='email' placeholder='e.g. name@gmail.com' required/>
          </div>

          {currentState === 'Log In' ? '' :
           <div className='flex flex-col gap-2'>
            <label className='text-xl font-semibold' htmlFor='phone'> Phone</label>
            <input className='py-3 px-4 border-2 border-amber-500 rounded-lg' type='number' id='phone' placeholder='Enter your phone number' required/>
          </div>
            }

          <div className='flex flex-col gap-2'>
            <label className='text-xl font-semibold' htmlFor='password'> Password</label>
            <input className='py-3 px-4 border-2 border-amber-500 rounded-lg' type='password' id='passowrd' placeholder='Enter your password' required/>
          </div>

          {currentState === 'Log In' ? '' :
          <div className='flex flex-col gap-2'>
            <label className='text-xl font-semibold' htmlFor='confirmpassword'> Confirm Password</label>
            <input className='py-3 px-4 border-2 border-amber-500 rounded-lg' type='password' id='confirmpassword' placeholder='Confirm your password' required/>
          </div>
          }

          { currentState === 'Log In'?
           <div className='flex gap-2 justify-end'>
             <p>Forgot your password?</p>
             <button onClick={()=>setCurrentState('Create Account')} className='flex  cursor-pointer text-red-800 hover:text-amber-600 active:text-amber-700 '>Create new account!</button>
           </div> : <button onClick={()=>setCurrentState('Log In')} className='flex justify-end cursor-pointer text-red-800 hover:text-amber-600 active:text-amber-700 '>login</button> 
           }

          {currentState === 'Log In'? <button type='submit' className='w-full py-3 px-4 mt-3 bg-amber-500 rounded-lg font-bold text-xl text-white hover:bg-amber-600 active:bg-amber-800'>Log In </button> 
          : <button type='submit' className='w-full py-3 px-4 mt-3 bg-amber-500 rounded-lg font-bold text-xl text-white hover:bg-amber-600 active:bg-amber-800'>Sign Up</button> }

        </form>
      </motion.div>
    </div>
  )
}

export default Login
