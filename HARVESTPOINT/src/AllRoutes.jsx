import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import WhatWeDo from './Pages/WhatWeDo'
import HowWeDoIt from './Pages/HowWeDoIt'

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/what-we-do" element={<WhatWeDo/>} />
        <Route path="/how-we-do-it" element={<HowWeDoIt/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes