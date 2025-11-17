import FlightInfo from "../planner/FlightInfo";
import MockData from "../planner/MockData";
import List from "../PlannerComponents/List";
import { useState } from 'react';



function SavedTrips({ trips, flightData, connFlightData, packingListData, reminderListData }) { //pass props from parent app to this child

    return (
        <>
            <div className="outer-wrapper">
                <div className="main-trip-container">


                    <div className="trip-box">


                        <div id="saved-trip-data">
                            <h1>Destination</h1>
                            {trips && trips.length > 0 ? (
                                trips.map((trip, tripIndex) => ( //trips is an array of objects so must map to display
                                    //map must have unique key
                                    <div key={tripIndex} className="saved-trip">

                                        {trip.map((day, dayIndex) => ( //nested day map inside trip 
                                            <div key={dayIndex} className="saved-day">
                                                City: {day.city}
                                                <br />
                                                Date: {day.date}

                                                <br />
                                                <div id="saved-activity-data">
                                                    {day.activities.map((activity, activityIndex) => ( //nested activity map inside day inside trip
                                                        <div key={activityIndex} className="saved-activity">
                                                            Activity: {activity.activity}
                                                            <br />
                                                            Time: {activity.time}
                                                            <br />
                                                            Notes: {activity.notes}
                                                        </div>
                                                    ))}
                                                </div>

                                            </div>
                                        ))}

                                    </div>
                                ))


                            ) : (
                                <p>No trips saved yet.</p>
                            )}
                        </div>
                    </div>


                    <div className="packing-reminders-box">

                        <h1>Packing List</h1>
                        <div className="packing-list-container">
                            {packingListData && packingListData.length > 0 ? (


                                packingListData.map((list, listIndex) => (
                                    <div key={listIndex} className="saved-packing-list" >

                                        <ul>
                                            {list.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))

                            ) : (
                                <p>No items added yet.</p>
                            )}

                        </div>


                        <h1>Reminder List</h1>
                        <div className="reminder-list-container">
                            {reminderListData && reminderListData.length > 0 ? (


                                reminderListData.map((reminderElement, elementIndex) => (
                                    <div key={elementIndex} className="reminder-list">
                                        <ul>
                                            {reminderElement.map((element, reminderIndex) => (
                                                <li key={reminderIndex}>{element}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))

                            ) : (
                                <p>No reminders added yet.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>





            <div className="flights-reminders-container">
                <div className="flights-container">
                    <h1>Flights</h1>
                    {flightData && flightData.length > 0 ? (
                        <div id="saved-flights-data">
                            {flightData.map((flight, flightIndex) => (
                                <div key={flightIndex} className="saved-flight" >
                                    Date: {flight.date}
                                    Departure Airport Code: {flight.departureAirportCode}
                                    Departure Time: {flight.departureTime}

                                    {flight.connections && flight.connections.length > 0 && (
                                        <div id="saved-connections-data">
                                            {flight.connections.map((connection, connnectionIndex) => (
                                                <div key={connnectionIndex} className="saved-connections">
                                                    Connecting Airport Code: {connection.connectingAirportCode}
                                                    Connecting Flight Time: {connection.connectingFlightTime}
                                                </div>
                                            ))}

                                        </div>
                                    )}
                                    Arrival Airport Code: {flight.arrivalAirportCode}
                                    Arrival Time: {flight.arrivalTime}
                                    Seat Number: {flight.seatNumber}
                                    <hr style={{ margin: "20px 0" }} />
                                </div>


                            ))}


                        </div>
                    ) : (
                        <p>No flights saved yet.</p>
                    )}
                </div>




            </div>

        </>
    )

}

export default SavedTrips;






