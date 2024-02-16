import { useState } from 'react'

import './App.css'
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import Contact from './pages/Contact';
import About from './pages/About'
import Services from './pages/Services';
import Products from './pages/Products';

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/products" element={<Products />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
