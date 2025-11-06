import React, { useState } from 'react'
import { Link, NavLink } from 'react-router'
import logo from '../assets/logo.jpg'
import cart from '../assets/cart.png'
import search from '../assets/icon/search.png'
import account from '../assets/icon/account.png'
import trolley from '../assets/icon/trolley.svg'

const Navbar = () => {

   const [subMenu, setSubmenu] = useState();

  return (
    <div className='w-full mx-auto'>
       <div className='w-full flex justify-between border-gray-300 border-b-2 items-center px-5 py-2'>
        <Link to='/'> 
            <img className='w-[110px] cursor-pointer' src={logo} alt=''/>
        </Link>

         <div className='flex items-center gap-6 justify-between'>
           <input className='w-[600px] rounded-full outline-none border-2 border-gray-300 py-3 px-6' type='text' placeholder='search product' />           
            
            
               <Link to='/login' className=' flex gap-4 items-center font-semibold justify-center w-[150px] py-2 px-2 border-2 border-black rounded-full hover:bg-amber-500 hover:border-none'>
               <img src={account} className='w-[30px]' alt='' /> 
                Account </Link>
              


            <Link to='/cart' className='flex gap-2 justify-center w-[150px] py-3 px-2 rounded-full bg-black text-white font-bold hover:bg-gray-400 hover:text-black'> $0.00 </Link>
               
         </div>
       </div>

       <div className='flex border-b-2 border-gray-300 py-2 px-4 justify-between items-center'>
          <ul className='flex gap-4'>
            
             <NavLink className='py-2 px-4  font-semibold text-xl  hover:text-amber-500 ' to='/'> Home </NavLink>
             
             <NavLink className='py-2 px-4   font-semibold text-xl  hover:text-amber-500' to='/about-us'> About Us </NavLink>
       
             <ul className=''>       
               <li className='relative'
               onMouseEnter={()=>setSubmenu(true)}
               onMouseLeave={()=>setSubmenu(false)}
               >

               <button className='hover:text-amber-500 py-2 px-4 font-semibold text-xl'> Products </button>
               {subMenu && (<div className='absolute left-0 top-full text-xl grid grid-cols-4 gap-6 bg-white shadow-lg border rounded-md p-6 w-[1000px] z-50'>
                   <NavLink to='/beauti'className='hover:text-amber-500 active:text-amber-700'> Beauti & Cosmetics </NavLink>
                   <NavLink to='/fruits'className='hover:text-amber-500 active:text-amber-700'> Fruits </NavLink>
                   <NavLink to='/'className='hover:text-amber-500 active:text-amber-700'> Vegetables </NavLink>
                   <NavLink to='/'className='hover:text-amber-500 active:text-amber-700'> Gas Burner </NavLink>
                   <NavLink to='/'className='hover:text-amber-500 active:text-amber-700'> Hose & Fittings </NavLink>
                   <NavLink to='/'className='hover:text-amber-500 active:text-amber-700'> Kitchenware </NavLink>

                   <NavLink to='/'className='hover:text-amber-500 active:text-amber-700'>  Rice Cookies  </NavLink>
                   <NavLink to='/'className='hover:text-amber-500 active:text-amber-700'>  Blore torch </NavLink>
                   <NavLink to='/'className='hover:text-amber-500 active:text-amber-700'>  Spare Parts </NavLink>
               </div>
                )}

               </li>
             </ul>
  
             <NavLink className='py-2 px-4   font-semibold text-xl  hover:text-amber-500' to='/contact-us'> Contact Us </NavLink>
            
           
          </ul>

          <div className='flex gap-6 items-center px-6'>
              
              <img src='' alt='' />
              <a href='' className='hover:text-gray-500 active:text-gray-400'> My Store | Closing at 5 pm</a>
          </div>

       </div>

    </div>
  )
}

export default Navbar
