import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div>
    <div className='border-t-2 border-gray-500 '>
    <div className='flex w-[95%] py-4 px-4 justify-between mx-auto '>
       <div>
         <p className='text-black text-xl mb-2'>About Us</p>
       </div>
       <div>
         <p className='text-black text-xl mb-2'>Contact Us</p>
          <p className='text-black '>Email :</p>
          <p className='text-black '>pktung470@gmail.com</p>
          <p className='text-black '>Phone :</p>
          <p className='text-black '>09456726976</p>
          <p className='text-black '>Address</p>
          <p className='text-black '>Myoma/Tedim</p>
       </div>
       <div className=''>
         <p className='text-black text-xl mb-2'>Product Category</p>
          <div className='flex flex-col'>
           <Link  className='text-black cursor-pointer hover:text-amber-500'to='/fruit'>  Fruit</Link>
           <Link  className='text-black cursor-pointer hover:text-amber-500'to='/vegetable'> Vegetable</Link>
         </div>
       </div>
       <div>
          <p className='text-black text-xl mb-2'> Social Media</p>
          <div className='flex flex-col'>
             <a href='' className='text-black cursor-pointer hover:text-amber-500'>Facebook</a> 
             <a href='' className='text-black cursor-pointer hover:text-amber-500'>Instagram</a> 
           </div>
       </div>
    </div>
    </div>
    <div className='bg-amber-500' >
      <p className='font-semibold text-center py-2 '> Copyright <span> &copy;</span> 2025 All Rights Reserved - Goshen Store </p>
    </div>
    </div>
    
  )
}

export default Footer
