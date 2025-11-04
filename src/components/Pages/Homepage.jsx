import React from 'react'
import { Link } from 'react-router'


function Homepage () {
    return (
    <main>
        <div className='homepage'>
            <h1>Welcome to Your Trip Planner!</h1>
            <p>
                <Link to="/planner" className='homepage-main'>Get Started Now!</Link>
            </p>
        </div>
    </main>
    )
}

export default Homepage;