import React, { createContext, useEffect, useState } from 'react'
import { products } from '../assets/products';
import { toast } from 'react-toastify';

export const ShopContext = createContext();


const GoshenShopProvider = (props) => {
  const [cartItems, setCartItems ] = useState([])
  const [quantity, setQuantity] = useState(1);

  
 const currency = "$"
 const delivery = 20;

  const decrease = ()=>{
      if(quantity >  1) {
        setQuantity (quantity - 1)
      }
    };
  const increase = ()=>{
      setQuantity(quantity + 1)
    }


 const addToCart = (id, quantity, price) => {
  const total = price * quantity;

  setCartItems(prev => {
    // Check if item with this id already exists
    const existingItem = prev.find(item => item.id === id);

    if (existingItem) {
      // Update quantity and total of existing item
      return prev.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + quantity,
              total: item.total + total,
          }
          : item
      );
    }

    // If item doesn't exist, add new one
    return [...prev, {id, quantity, price, total }];
  });

 setQuantity(1);
 toast.success("Add To Cart"); 
};

const updateQuantityDeduct = (id, quantity, price) => {
 
  setCartItems(prev => {
    const existingItem = prev.find(item => item.id === id);
    if (existingItem) {
      return prev.map(item =>
        item.id === id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1, 
              total: item.total - price   
          }
          : item
      );
    }
  });
};

const updateQuantityAdd = (id, quantity, price) => {
  setCartItems(prev => {
    const existingItem = prev.find(item => item.id === id);
    if (existingItem) {
      return prev.map(item =>
        item.id === id && item.quantity > 0
          ? {
              ...item,
              quantity: item.quantity + 1,
              total: item.total + price,    
          }
          : item
      );
    }
  });
};

const getItemCount = ()=>{
  return cartItems.length
}

const getCartTotal = () => {
  let total = 0;
  for (const item of cartItems) {
    total += item.total;
  }
  return total;
};


const removeItem = (id) => {
    const result = cartItems.filter((item)=>item.id !== id)
    setCartItems(result)     
};


useEffect(()=>{
  console.log(cartItems)
},[cartItems])

  const value = {products, currency, addToCart, cartItems, quantity, decrease, increase,
               getItemCount, getCartTotal, updateQuantityDeduct, updateQuantityAdd, removeItem,
              delivery}
      return(
          <ShopContext.Provider value={value} >
            {props.children}
          </ShopContext.Provider>
      )
}

export default GoshenShopProvider
