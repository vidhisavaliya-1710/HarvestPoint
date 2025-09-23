import React from 'react'
import Services from './Pages/Services'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import WhoWeAre from './Pages/WhoWeAre'
import WhatWeDo from './Pages/WhatWeDo'
import HowWeDoIt from './Pages/HowWeDoIt'
import GreenMovement from './Pages/GreenMovement'

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path="/whoweare" element={<WhoWeAre/>}/>
        <Route path="/Farmers-Corner" element={<WhatWeDo/>} />
        <Route path="/how-we-do-it" element={<HowWeDoIt/>} />
        <Route path="/green-movement" element={<GreenMovement/>}/>
        
      </Routes>
    </div>
  )
}

export default AllRoutes