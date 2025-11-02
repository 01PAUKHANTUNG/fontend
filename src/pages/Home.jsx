import React, { useContext, useEffect, useState } from 'react'
import Items from '../components/items'
import Title from '../components/Title'
import { ShopContext } from '../context/GoshenContext'
import NewArrival from '../components/NewArrival'
import BestSeller from '../components/BestSeller'


const Home = () => {
  const {products, currency} = useContext(ShopContext);
 
  return (
    <div className='w-[95%] mx-auto'>
      <div className='py-6 '>
           <p> Hero Section </p>
       </div>
       <div className='py-6'>
         <NewArrival />
       </div>
        <div className='py-6'>
         <BestSeller />
       </div>
      
    </div>
  )
}

export default Home
