import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/GoshenContext.jsx';
import Items from '../components/Items.jsx';
import FilterBox from '../components/FilterBox.jsx';
import Title from '../components/Title.jsx';

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
