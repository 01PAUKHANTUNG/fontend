import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/GoshenContext';
import Title from './Title';
import Items from './items';

const BestSeller = () => {

    const {products, currency} = useContext(ShopContext);
           const [bestSeller, setBestSeller] = useState([]);
        
            useEffect(()=>{
                 const bestSeller = products.filter((item)=>(item.bestSelling))
                 setBestSeller(bestSeller.slice(0,30))
            },[products])

  return (
    <div>
       
           <Title title="Best Selling" />
           <div className="grid mx-auto sm:grid-cols-3 md:grid-cols-4 sm:gap-3 lg:grid-cols-4 justify-center items-center mt-5">
             {
              bestSeller.map((item, key)=>{
                return <Items
                key={key}
                id = {item.id}
                image ={item.image} 
                price= {item.price}
                description= {item.description} 
                stockavaiable= {item.stockavaiable}
                newArrive = {item.newArrive} 
                 />
              })
             }
           </div>
    </div>
  )
}

export default BestSeller
