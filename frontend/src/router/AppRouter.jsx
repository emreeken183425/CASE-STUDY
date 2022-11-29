import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Form from '../pages/Form'

import {BrowserRouter,Routes,Route} from "react-router-dom"
function AppRouter() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
      
    </Routes>
  </BrowserRouter>
  )
}

export default AppRouter