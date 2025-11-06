import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Navbar from './components/Navbar'

import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Login from './pages/Login'
import Fruits from './pages/Fruits'
import ProductItems from './pages/ProductItems'
import Cart from './pages/Cart'
import Beauti from './pages/Beauti'


const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about-us' element={<AboutUs />}/>
        <Route path='/fruits' element={<Fruits/>}/>
        <Route path='/beauti' element={<Beauti />} />
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/cart' element={<Cart />} />

        <Route path='/product/:productId' element={<ProductItems/>} />
        <Route path='/login' element={<Login />} />
        
        
      </Routes>
      <Footer />
    </div>
  )
}

export default App
