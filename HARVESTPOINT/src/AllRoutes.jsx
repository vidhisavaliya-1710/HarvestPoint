import React from 'react'
import Services from './Pages/Services'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import WhoWeAre from './Pages/WhoWeAre'
import WhatWeDo from './Pages/WhatWeDo'
import HowWeDoIt from './Pages/HowWeDoIt'
import Blog from './Pages/Blog'
import ContactUs from './Pages/Contactus'
import GreenMovement from './Pages/GreenMovement'
import Product from './Pages/Product'
import Carrers from './Pages/Carrers'
import Career from './Pages/Carrer'

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path="/whoweare" element={<WhoWeAre/>}/>
        <Route path="/Farmers-Corner" element={<WhatWeDo/>} />
        <Route path="/how-we-do-it" element={<HowWeDoIt/>} />
        <Route path='/products' element={<Product/>}/>
        <Route path='/carrers' element={<Carrers/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contactUs' element={<ContactUs/>}/>
        <Route path="/green-movement" element={<GreenMovement/>}/>
        <Route path="/carrer" element={<Career/>}/>
        
      </Routes>
    </div> 
  )
}

export default AllRoutes