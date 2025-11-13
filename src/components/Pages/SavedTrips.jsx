import FlightInfo from "../planner/FlightInfo";
import MockData from "../planner/MockData";
import List from "../PlannerComponents/List";
import { useState } from 'react';



function SavedTrips({ trips, setTrips, packingList, setPackingList }) { //pass props from parent app to this child

    return (
        <>
            <div id="saved-trip-data">
                {trips.map((trip, tripIndex) => ( //trips is an array of objects so must map to display
                                                    //map must have unique key
                    <div key={tripIndex} className="saved-trip">

                        {trip.map((day, dayIndex) => ( //nested day map inside trip 
                            <div key={dayIndex} className="saved-day">
                                City: {day.city}
                                Date: {day.date}


                                <div id="saved-activity-data"> 
                                    {day.activities.map((activity, activityIndex) => ( //nested activity map inside day inside trip
                                        <div key={activityIndex} className="saved-activity"> 
                                            Activity: {activity.activity}
                                            Time: {activity.time}
                                            Notes: {activity.notes}
                                        </div>
                                    ))
                                    }
                                </div>


                            </div>
                        ))}


                    </div>
                ))}
            </div >

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



