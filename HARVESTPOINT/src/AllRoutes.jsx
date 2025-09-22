import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import WhoWeAre from './Pages/WhoWeAre'

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/whoweare" element={<WhoWeAre/>}/>
        
      </Routes>
    </div>
  )
}

export default AllRoutes