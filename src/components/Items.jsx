import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/GoshenContext.jsx'
import { Link } from 'react-router';


const Items = (props) => { 

  const {currency} = useContext(ShopContext);

  return (
    <div className={`${props.stockavaiable ? 'hover:shadow-lg':' cursor-not-allowed'} w-[300px] sm-w-[300px] md:w-[350px] h-auto flex flex-col gap-2 py-4 px-6 border-2 rounded-xl `}>
      <div className='flex group relative justify-center items-center'>
        <img className={`${props.stockavaiable ? "hover:scale-110 ":'hover:cursor-not-allowed'} w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] cursor-pointer m-6 `} src={props.image} alt='' />
         {props.newArrive === true ?  <p className='absolute right-0 top-0 bg-green-700 py-2 px-4 rounded-sm text-white text-sm font-semibold'>NEW</p> : ""}
         {props.stockavaiable === true ? "" : <p className='absolute right-0 top-10 bg-gray-300 py-2 px-4 rounded-sm text-black text-sm font-semibold'>Out of Stock</p> }  
      </div>
    
      <p className=' text-2xl'>{currency}{props.price}.00 </p>

      <div className='h-28'>
      <p className='text-2xl font-semibold'> {props.description}</p>
      </div>
       
        <p className='font-medium mb-2'>{props.subCategory}</p>
          {
            props.stockavaiable ?   
            <Link to={`/product/${props.id}`} className='w-full rounded-full text-center items-center py-3 px-2 font-semibold text-xl 
          bg-black text-white hover:bg-green-700 cursor-pointer' > Buy Now </Link>
            : <p to='/login' className='w-full rounded-full text-center items-center py-3 px-2 font-semibold text-xl 
          bg-gray-400  cursor-not-allowed text-gray-100' > Sold Out </p>
          }


      <div className='flex gap-2 mt-2 items-center'>
        {props.stockavaiable === true ? <p className='rounded-full bg-green-700 w-[10px] h-[10px]'></p> :
        <p className='font-gray-500 text-xl font-thin '>o</p>  
         }
         {props.stockavaiable === true ? <p> Avaiable for pickup at Goshen Store</p>: <p > Out of stock at Goshen Store</p>}
        
      </div>
    </div>
  )
}

export default Items
