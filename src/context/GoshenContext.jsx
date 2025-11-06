import React, { createContext, useState } from 'react'
import { products } from '../assets/products';

export const ShopContext = createContext();


const GoshenShopProvider = (props) => {
  const [cartItems, setCartItems ] = useState({})


 const currency = "$"

  const addToCart = async ()=>{
  let cartData = structuredClone(cartItems);

    if(cartData[id]){
      if(cartData[id][size]){
         cartData[id][size] += 1 ;

      }else{
        cartData[id][size] = 1;    
      }

    }else{
      cartData[id] ={};
      cartData[id][size] = 1;    
    }
    setCartItems(cartData);
  }

  const value = {products, currency, addToCart}
      return(
          <ShopContext.Provider value={value} >
            {props.children}
          </ShopContext.Provider>
      )
}

export default GoshenShopProvider
