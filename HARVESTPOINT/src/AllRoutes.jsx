import React from 'react'
import Services from './Pages/Services'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import WhoWeAre from './Pages/WhoWeAre'
import WhatWeDo from './Pages/WhatWeDo'
import HowWeDoIt from './Pages/HowWeDoIt'

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path="/whoweare" element={<WhoWeAre/>}/>
        <Route path="/what-we-do" element={<WhatWeDo/>} />
        <Route path="/how-we-do-it" element={<HowWeDoIt/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes