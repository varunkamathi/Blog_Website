import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import DashBorad from './pages/DashBoard'
import Projects from './pages/Projects'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import Footer from './components/Footer'


export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/dashboard' element={<DashBorad/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/signup' element={<SignUp/>} />


    </Routes>
    <Footer />
    </BrowserRouter>
  )
}
