import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Index from './pages/Index'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <>
      <div className='position-relative'>
        <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
        <Footer/>
        <BackToTop />
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
