import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/GoshenContext';


const Cart = () => {
  const {quantity, cartItems, products, currency, updateQuantityDeduct,
         delivery, updateQuantityAdd, removeItem} = useContext(ShopContext)
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState();
 const [deliveryFee, setDeliveryFee] = useState();

const filterData = ()=>{ 
    const result = products.filter(product=> cartItems.some(cart=> cart.id === product.id)  
  );
    setCart(result)
}

const itemQuantity = (itemId) => {
  const result = cartItems.find(cart => cart.id === itemId);
  return result ? result.quantity : 0;
};

const itemTotal = (itemId) => {
  const result = cartItems.find(cart => cart.id === itemId);
  return result ? result.total : 0;
};

const all_Itemstotal = ()=>{
  let result = 0;
  let deliveryResult = 0 ;
  for(const items in cartItems){
        result += cartItems[items].total
  }
  setTotal(result) 
   if(result){
           return setDeliveryFee(delivery)
        }
        else{
         return setDeliveryFee(deliveryResult)
        }
}


useEffect(()=>{
  filterData()
  all_Itemstotal();
},[products, cartItems])


  return (
    <div className='w-[95%] mx-auto'>
      <div className='flex gap-4 m-6'>

        <div className='flex w-[75%]'>
          <div className=' mx-auto '>
            <ul className='grid grid-cols-[8fr_5fr_3fr_1fr] py-4 px-4 rounded-t-xl bg-gray-400'>
              <li className=' font-semibold'>Product</li>
              <li className=' font-semibold mx-auto'>Quantity</li>
              <li className=' font-semibold'>Total</li>
              <li className=' font-semibold'>Remove</li>
            </ul>

            {
               cart.map((item, key)=> { 
                return ( 
            <div key={key} className='border-2 border-gray-500 grid grid-cols-[8fr_5fr_3fr_1fr] mt-2 py-4 px-4 items-center '>
                <div className='flex gap-3'>
                     <img className='w-[250px] h-[150px]' src={item.image} alt='' /> 
                   <div className='flex flex-col gap-2'>
                      <p>{item.category}</p>
                      <p className='font-semibold text-xl'>{item.description}</p>
                      <p className='font-semibold'>{currency}{item.price}.00</p>
                   </div>
                </div>
                <div className='flex gap-2 items-center  mx-auto '>  
                  <button className='w-[40px] py-1 px-1 text-xl font-bold rounded-full border-2 border-black hover:scale-105 hover:shadow-lg' onClick={()=>updateQuantityDeduct(item.id, itemQuantity(item.id), item.price)}>  - </button>
                  <p className='w-8 text-2xl align-middle text-center'>{itemQuantity(item.id)}</p>
                  <button className='w-[40px] py-1 px-1 text-xl font-bold rounded-full border-2 border-black hover:scale-105 hover:shadow-lg' onClick={()=>updateQuantityAdd(item.id, itemQuantity(item.id), item.price)}>  + </button>
                </div> 
                <p>{currency}{itemTotal(item.id)}.00</p>
                <button onClick={()=>removeItem(item.id)} className='cursor-pointer underline hover:text-gray-500 hover:scale-95'>Remove</button>
            </div>
            )})
          }
          </div>         
        </div>       

        <div className='flex w-[35%] '>
            <div className='flex flex-col gap-3 w-[95%] h-[230px] mx-auto  py-6 px-2 border-2 border-gray-500 rounded-xl'>
               <p className='flex text-xl justify-between '>Cart Total<span className='flex text-end '>{currency}{total}.00</span> </p>
                <p className='flex text-xl justify-between '>Delivery Fee<span className='flex text-end '>{currency}{deliveryFee}.00</span> </p>
                <hr className='border border-gray-500'/>
               <p className='flex text-xl justify-between font-semibold'>Total<span className='flex text-end font-semibold'>{currency}{total + deliveryFee}.00</span></p>
               <button className='w-full bg-green-600 font-semibold py-2 px-2 text-center text-xl rounded-lg hover:bg-green-700 active:bg-green-800 active:text-gray-800'> Payment </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
