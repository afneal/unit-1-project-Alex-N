import { useState } from 'react'
import React from 'react'
import { Routes, Route, Link } from 'react-router'
import Homepage from './components/pages/Homepage'


import './App.css'

function App() {
  

  return (
    <>
    <div className='App'>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/planner">Planner</Link></li>
          <li><Link to="/traveltips">Travel Tips</Link></li>
          <li><Link to="/resources">Resources</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/traveltips" element={<TravelTips />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      </div>

    </>
    
  )
}

export default App
