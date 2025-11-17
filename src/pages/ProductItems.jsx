import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ShopContext } from '../context/GoshenContext.jsx';

const ProductItems = () => {
    const {products, currency, addToCart, cartItems, quantity, decrease, increase} = useContext(ShopContext);
    const {productId} = useParams();
    const [productData, setProductData] = useState(false);
    
    

    const fetchProductData = ()=>{
        products.map((item)=>{
            if(item.id === productId){
                setProductData(item);
                return null;
            }       
        })
    };

   
    const getTotal = ()=>{
      let sum = 0;    
     if(quantity > 0){
         sum = productData.price * quantity 
         return sum;
     }
     
    }

    useEffect(()=>{
        fetchProductData()
    },[productId, products]);

  

  return (
    <div className='w-[95%] mx-auto py-6'>

      <div className='flex gap-5 justify-center'>
        <div className='border-2 border-gray-500 py-6 px-6'>
          <img className='w-[300px] h-[300px]' src={productData.image} alt=''/>
          
        </div>
         <div className='flex flex-col gap-3'>
            <p> Goshen Store</p>
            <p className='text-3xl my-5'>{productData.description} </p>
            <p className='text-xl font-bold'>{currency}{productData.price}.00 </p>
             <div className='flex flex-cols gap-6 items-center my-4'>
                <button  onClick={()=>decrease()} className='w-[50px] py-3 px-3 text-xl font-bold rounded-full border-2 border-black hover:scale-105 hover:shadow-lg'>-</button>
                <p className='text-2xl '>{quantity}</p>
                <button onClick={()=>increase()} className='w-[50px] py-3 px-3 text-xl font-bold rounded-full border-2 border-black hover:scale-105 hover:shadow-lg'>+</button>
             </div>
             <div className='flex gap-6 items-center'>
                <p className='text-2xl font-bold'>Total</p>
                <p className='text-2xl font-semibold'>{currency}{getTotal()}.00</p>
             </div>
            
            <hr />
            <div className='flex justify-center gap-32'>
               <button onClick={()=>addToCart(productData.id, quantity, productData.price, getTotal())} className='w-[400px] py-2 px-4 bg-black hover:bg-green-700 text-white text-xl font-semibold hover:shadow-lg '> Add to Card</button>
            </div>
        </div>
      </div>

    </div>
  )
}

export default ProductItems
