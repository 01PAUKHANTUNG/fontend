import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/GoshenContext.jsx';
import Title from '../components/Title.jsx';
import FilterBox from '../components/FilterBox.jsx';
import Items from '../components/Items.jsx';

const Beauti = () => {
   const {products, currency} = useContext(ShopContext);
    const [beautiProducts, setBeautiProducts] = useState([]);
    const [result, setResult] = useState([]);     
      
    useEffect(()=>{
    const beauti = products.filter((item)=>(item.category === 'Beauti & Cosmetics'))
    setBeautiProducts(beauti)         
    },[products])
          
    useEffect(()=>{
    console.log("fruit result :" , result)
    },[result])

  return (
    <div className='w-[95%] mx-auto py-4 '>
      <Title title="Beauti & Cosmetics" />
      <FilterBox products={beautiProducts} setResult={setResult}/>
      <div className='flex mx-auto'>
       <div className="grid mx-auto sm:grid-cols-3 md:grid-cols-4 sm:gap-3 lg:grid-cols-4 justify-center items-center mt-5 ">
             {
             result.map((item, key)=>{
                return <Items
                key={key}
                id = {item.id}
                image ={item.image} 
                 price={item.price} 
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

export default Beauti
