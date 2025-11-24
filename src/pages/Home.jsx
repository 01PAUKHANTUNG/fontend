import React, { useContext, useEffect, useState } from 'react'
import Items from '../components/Items.jsx'
import Title from '../components/Title.jsx'
import { ShopContext } from '../context/GoshenContext.jsx'
import NewArrival from '../components/NewArrival.jsx'
import BestSeller from '../components/BestSeller.jsx'
import Hero from '../components/Hero.jsx'


const Home = () => {
  const {products, currency} = useContext(ShopContext);
 
  return (
    <div className='w-[95%] mx-auto'>
      <div className='py-6 '>
           <Hero />
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
