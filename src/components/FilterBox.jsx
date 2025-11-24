import React, { useContext, useEffect, useState } from 'react'
import GoshenShopProvider, { ShopContext } from '../context/GoshenContext.jsx';


const FilterBox = ({products, setResult, subCategory}) => {
const [filter, setFilter] = useState('all-products');
const [sort, setSort] = useState('low-high');
const [sbCategory, setSbCategory] = useState('')


  const filterAndSort = () => {
    if (!products || products.length === 0) return;

    let filtered =products.slice();

    // Apply filter
    switch (filter) {
      case 'all-products':
        filtered = filtered;
        break;
      case 'in-stock':
        filtered = filtered.filter(item => item.stockavaiable === true);
        break;
      case 'out-of-stock':
        filtered = filtered.filter(item => item.stockavaiable === false);
        break;
      default:
        break; 
    }

    //Apply SubCategory
     // Apply SubCategory
      if (sbCategory !== "") {
        filtered = filtered.filter(item => item.subCategory === sbCategory);
         }

    //  Apply sorting
    switch (sort) {
      case 'best':
        filtered = filtered.filter(item => item.bestSelling === true);
        break;
      case 'new':
        filtered = filtered.filter(item => item.newArrive === true);
        break;
      case 'low-high':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setResult(filtered);
    
  };

  //  Run filtering & sorting whenever either filter, sort, or products change
  useEffect(() => {
    filterAndSort();
  }, [filter, sort, products, sbCategory]);

  //  Run once on first load (makes sure “all-products” + “low-high” apply immediately)
  useEffect(() => {
    filterAndSort();
  }, []);

 

  return (
    <div className='py-4'>
      <div className='flex justify-between'>
        <div className='flex flex-col sm:flex-row gap-4'>

         <div className='flex flex-col gap-2'>
         <p className='text-xl '> Filter :</p>
         <select onChange={(e)=>{setFilter(e.target.value)}}  className='w-[150px] sm:w-[150px] md:w-[300px] py-2 px-2 items-center border-2 border-gray-500'>
          <option value='all-products'>All Products</option>
           <option value='in-stock'>In stock</option>
           <option value='out-of-stock'>Out of stock</option>
         </select>
         </div>

        <div className='flex flex-col gap-2'>
        <p className='text-xl '> SubCategory :</p>
        <select value={sbCategory} onChange={(e)=>setSbCategory(e.target.value)} className='w-[150px] sm:w-[150px] md:w-[300px] py-2 px-2 items-center border-2 border-gray-500'>
         {
          subCategory.map((item, key)=>{          
           return <option value={item} key={key}>{item}</option> 
          })  
         }
       </select>
       </div>
      </div>

         <div className='flex flex-col gap-2'>
          <p className='text-xl '> Sort by : </p>
         <select onChange={(e)=>{setSort(e.target.value)}} className='w-[150px] sm:w-[150px] md:w-[300px] py-2 px-2 items-center  border-2 border-gray-500'>
            <option value='low-high'>Price, low to high</option>
           <option value='high-low'>Price, high to low</option>
           <option value='best'>Best selling</option>
           <option value='new'>New Arrival </option>   
         </select>
         </div>

      </div>
    </div>
  )
}

export default FilterBox

