import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/GoshenContext';
import Items from '../components/items';
import FilterBox from '../components/FilterBox';
import Title from '../components/Title';

const Fruits = () => {
    const {products, currency} = useContext(ShopContext);
         const [fruitProducts, setFruitProducts] = useState([]);
      
          useEffect(()=>{
               const fruits = products.filter((item)=>(item.category === 'Fruits'))
               setFruitProducts(fruits)
          },[products])

  return (
    <div className='w-[95%] mx-auto py-4 '>
      <Title title="Fruits" />
      <FilterBox />
      <div className='flex mx-auto'>
       <div className="grid mx-auto sm:grid-cols-3 md:grid-cols-4 sm:gap-3 lg:grid-cols-4 justify-center items-center mt-5 ">
             {
              fruitProducts.map((item, key)=>{
                return <Items
                key={key}
                id = {item.id}
                image ={item.image} 
                 price='20.00' 
                 description= {item.description}
                 stockavaiable= {item.stockavaiable}
                 newArrive = {item.newArrive} 
                 />
              })
             }
           </div>
           </div>
    </div>
  )
}

export default Fruits
