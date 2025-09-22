import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Services from './Pages/Services'
import Home from './Pages/Home'

import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import WhoWeAre from './Pages/WhoWeAre'

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path="/whoweare" element={<WhoWeAre/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes