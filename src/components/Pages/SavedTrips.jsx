import FlightInfo from "../planner/FlightInfo";
import MockData from "../planner/MockData";
import List from "../PlannerComponents/List";
import { useState } from 'react';



function SavedTrips() {


    return (
        <>
            <div id='mock-data-container'>
                <MockData />
            </div>

            <div id="packing-list-container">Packing List: 
                <List />
            </div>

            <div id='reminder-list-container'>Important Reminders:
                <List />
            </div>

            



        </>




    )

}

export default SavedTrips;



