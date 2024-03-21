import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from '../components/navbar/Navbar'
import About from '../pages/About'
import Services from '../pages/Services'
import Css from '../pages/Css'
import Logo from '../pages/Logo'
import HTML from '../pages/Html'
import Footer from '../components/footer/Footer'

const AppRouter = () => {
  return (
<Router>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/html" element={<HTML/>}/>
        <Route path="/css" element={<Css/>}/>
        <Route path="/logo" element={<Logo/>}/>
    </Routes>
    <Footer/>
</Router> 
)
}

export default AppRouter