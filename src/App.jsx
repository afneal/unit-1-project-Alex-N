import { useState } from 'react'
import React from 'react'
import { Routes, Route } from 'react-router'
import Homepage from './components/pages/Homepage'
import Header from './components/layout/Header'
import travelBackground from './assets/travelBackground.jpg';


import './App.css'
import TravelTips from './components/Pages/TravelTips'

function App() {
  

  return (
    <>
    <div className='App' style={{backgroundImage: `url(${travelBackground})`, backgroundSize: 'cover', backgroundPosition:'center', minHeight:'100vh',
  margin: '0', padding: '0', opacity: 0.9}}>
      <Header />
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/traveltips" element={<TravelTips />} />
        {/* <Route path="/planner" element={<Planner />} />
        
        <Route path="/resources" element={<Resources />} /> */}
      </Routes>
      </div>

    </>
    
  )
}

export default App
