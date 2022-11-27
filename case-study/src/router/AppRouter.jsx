import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import {BrowserRouter,Routes,Route} from "react-router-dom"
function AppRouter() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      
      
    </Routes>
  </BrowserRouter>
  )
}

export default AppRouter