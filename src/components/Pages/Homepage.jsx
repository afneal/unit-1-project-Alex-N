import React from 'react'
import { Link } from 'react-router'


function Homepage () {
    return (
    <main>
        <div className='homepage'>
            <h1 className='homepage-text'>Welcome to Your Trip Planner!</h1>
            <p>
                <Link to="/buildTrips" className='homepage-main'>Get Started Now!</Link>
            </p>
        </div>
    </main>
    )
}

export default Homepage;