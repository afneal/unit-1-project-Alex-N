
import { Routes, Route } from 'react-router'
import Homepage from './components/pages/Homepage'
import Header from './components/layout/Header'
import travelBackground from './assets/travelBackground.jpg';
import Footer from './components/layout/Footer'
import Planner from './components/Pages/Planner'
import SavedTrips from './components/Pages/SavedTrips'
import { useState } from 'react'
import './App.css'
import TravelTips from './components/Pages/TravelTips'
import BuildTrips from './components/Pages/BuildTrip';
import FlightInfo from './components/planner/FlightInfo';
import List from './components/PlannerComponents/List';
import { ToastContainer } from 'react-toastify';

function App() {
  
const [trips, setTrips] = useState([]);
const [packingList, setPackingList] = useState([])
const [list, setList] = useState([])
const [flightData, setFlightData] = useState([]);
const [reminderList, setReminderList] = useState([])




  return (
    <>
    {/* <div className='App' style={{backgroundImage: `url(${travelBackground})`, backgroundSize: 'cover', backgroundPosition:'center', minHeight:'100vh',
  margin: '0', padding: '0', opacity: 0.9}}> */}
      <Header />
      <ToastContainer position="top-right" autoClose={1000} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/traveltips" element={<TravelTips />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/buildtrips" element={<BuildTrips trips={trips} setTrips={setTrips} flightData={flightData} setFlightData={setFlightData}
         packingList={packingList} setPackingList={setPackingList} list={list} setList={setList} reminderList={reminderList} setReminderList={setReminderList}
         />} />

        <Route path="/savedtrips" element={<SavedTrips trips={trips} setTrips={setTrips} packingList={packingList} setPackingList={setPackingList} 
        list={list} setList={setList} flightData={flightData} setFlightData={setFlightData} reminderList={reminderList} setReminderList={setReminderList}
         />} />
        
        
        {/* <Route path="/resources" element={<Resources />} /> */}
      </Routes>

      <Footer />
      {/* </div> */}

    </>
    
  )
}

export default App
