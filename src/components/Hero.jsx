import React from 'react'
import banner from '../assets/banner.jpg'
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="max-w-8xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT SIDE TEXT */}
        <motion.div 
         initial={{opacity:0, y:0}}
         animate={{opacity:1, y:0}}
         transition={{
           delay:0.2,
           duration:1
         }}
        className="flex flex-col gap-4 md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Fresh Products Delivered to Your Home
          </h1>
          <p className="text-gray-600 text-lg">
            Welcome to Goshen Store Ringwood.
            Here are everythings that you needed, Cookingware, Homeware, Grocery, Fresh vegetables, Readymade for eating product & Softdrinks ect...
            
          </p>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <div className="md:w-1/2">
          <img
            src={banner}
            alt="Hero Banner"
            className="rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero
