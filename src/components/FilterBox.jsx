import React from 'react'

const FilterBox = () => {
  return (
    <div className='py-4'>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-2'>
          <p className='text-xl '> Filter :</p>
         <select className='w-[300px] py-2 px-2 items-center border-2 border-gray-500'>
           <option>In stock</option>
           <option>Out of stock</option>
         </select>
        </div>

         <div className='flex flex-col gap-2'>
          <p className='text-xl '> Sort by : </p>
         <select className='w-[300px] py-2 px-2 items-center  border-2 border-gray-500'>
           <option>Best selling</option>
           <option>New Arrival </option>
           <option>Price, low to high</option>
           <option>Price, high to low</option>
         </select>
         </div>

      </div>
    </div>
  )
}

export default FilterBox

