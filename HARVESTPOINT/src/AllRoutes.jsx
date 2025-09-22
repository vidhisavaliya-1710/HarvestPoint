import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Services from './Pages/Services'
import Home from './Pages/Home'


function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes