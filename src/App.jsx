import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import DashBorad from './pages/DashBorad'
import Projects from './pages/Projects'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/dashborad' element={<DashBorad/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/signup' element={<SignUp/>} />


    </Routes>
    </BrowserRouter>
  )
}
