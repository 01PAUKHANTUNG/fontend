import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/GoshenContext.jsx';
import Title from './Title.jsx';
import Items from './Items.jsx';

const NewArrival = () => {
     const {products, currency} = useContext(ShopContext);
       const [newArrive, setNewArrive] = useState([]);
    
        useEffect(()=>{
             const newProducts = products.filter((item)=>(item.newArrive))
             setNewArrive(newProducts.slice(0,30))
        },[products])

      

  return (

    <div >
           <Title title="New Arrivals" />
           <div className="grid mx-auto sm:grid-cols-3 md:grid-cols-4 sm:gap-3 lg:grid-cols-4 justify-center items-center mt-5">
             {
              newArrive.map((item, key)=>{
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

export default NewArrival
