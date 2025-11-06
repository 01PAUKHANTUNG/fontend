import shampoo from '../assets/products/Shampoo.jpg'
import swepyinan from '../assets/products/Swepyinan.avif'
import mama from '../assets/products/MaMa.webp'
import coffee from '../assets/products/Coffee.webp'

import Birdy1 from '../assets/products/Birdy1.avif'
import lution from '../assets/products/lution.webp'
import maiza from '../assets/products/maiza.webp'
import Veseline1 from '../assets/products/Veseline1.webp'

export const products = [
    {
        id:"a",
        name:"Shampoo",
        category : "Beauti & Cosmetics",
        description: "Clear Cool Sport Menthol Shampoo (390 ml)",
        price: 108.00,
        bestSelling : true,
        stockavaiable : true,
        newArrive : true,
        image: shampoo,
        date : 1234567,
    },
    {
        id:"b",
        name:"Thanakher",
        category : "Beauti & Cosmetics",
        description: "Shwe Pyi Nan Thanakher (Lemon)",
        price: 12.00,
        bestSelling : true,
        stockavaiable : true,
        newArrive : true,
        image: swepyinan,
        date : 1234567,
    },
       {
        id:"c",
        name:"Lution",
        category : "Beauti & Cosmetics",
        description: "White Spa Fuk Kao Lotion (400 ml) + (80 ml)",
        price: 10.00,
        bestSelling : false,
        stockavaiable : true,
        newArrive : true,
        image: lution,
        date : 1234567,
    },
       {
        id:"d",
        name:"Mama",
        category : "Fruits",
        description: "Mama Shrimp Tom Yum Flavoured Instant Cup Noodles (60 g)",
        price: 72.00,
        bestSelling : true,
        stockavaiable : true,
        newArrive : false,
        image: mama,
        date : 1234567,
    },
       {id:"e",
        name:"Maiza",
        category : "Beauti & Cosmetics",
        description: "Jula's Herb DD Cream Watermelon (40 g)",
        price: 11.00,
        bestSelling : false,
        stockavaiable : true,
        newArrive : true,
        image: maiza,
        date : 1234567,
    },
       {
        id:"f",
        name:"Veseline",
        category : "Beauti & Cosmetics",
        description: "Vaseline Pure Repairing Jelly",
        price: 36.00,
        bestSelling : false,
        stockavaiable : false,
        newArrive : true,
        image: Veseline1,
        date : 1234567,
    },
    
     {
        id:"h",
        name:"Birdy",
        category : "Fruits",
        description: "Birdy 3 in 1 Instant Coffee Mix (Yellow) (13.2 g x 27) Small",
        price: 117.00,
        bestSelling : true,
        stockavaiable : false,
        newArrive : false,
        image: Birdy1,
        date : 1234567,
    }
   

]