import React, { createContext } from 'react'
import { products } from '../assets/products';

export const ShopContext = createContext();


const GoshenShopProvider = (props) => {
    const currency = "$"

  const value = {products, currency}
      return(
          <ShopContext.Provider value={value} >
            {props.children}
          </ShopContext.Provider>
      )
}

export default GoshenShopProvider
