import FlightInfo from "../planner/FlightInfo";
import MockData from "../planner/MockData";
import List from "../PlannerComponents/List";
import { useState } from 'react';



function SavedTrips({ trips, flightData, packingList, reminderList }) { //pass props from parent app to this child

    return (
        <>
            <div className="outer-wrapper-trips">
                <div className="main-trip-container">


                    <div className="trip-box">

                        <h1>Destination</h1>
                        <div id="saved-trip-data">

                            {trips && trips.length > 0 ? (
                                trips.map((trip, tripIndex) => ( //trips is an array of objects so must use map to display
                                    //map must have unique key
                                    <div key={tripIndex} className="saved-trip">

                                        {trip.map((day, dayIndex) => ( //nested day map inside trip 
                                            <div key={dayIndex} className="saved-day">
                                                <div className="trip-date-box">
                                                    <strong> Date:</strong> {day.date}
                                                </div>
                                                <br />
                                                <strong> City:</strong> {day.city}
                                                <br />



                                                <div id="saved-activity-data">
                                                    {day.activities.map((activity, activityIndex) => ( //nested activity map inside day inside trip
                                                        <div key={activityIndex} className="saved-activity">
                                                            <strong>Activity:</strong> {activity.activity}
                                                            <br />
                                                            <strong>Time: </strong>{activity.time}
                                                            <br />
                                                            <strong> Notes:</strong> {activity.notes}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))
                            ) : (
                                <div className="saved-day">
                                    <p>No trips saved yet.</p>
                                </div>
                            )}
                        </div>
                    </div>


                    <div className="packing-box">

                        <h1>Packing List</h1>

                        <div className="packing-list-container">
                            {packingList && packingList.length > 0 ? (
                                packingList.map((list, listIndex) => (
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
                    </div>
                </div>







                <div className="flights-reminders-container">

                    <div className="flights-box">
                        <h1>Flights</h1>
                        <div className="flights-container">

                            {flightData && flightData.length > 0 ? (
                                <div id="saved-flights-data">

                                    {flightData.map((flight, flightIndex) => (
                                        <div key={flightIndex} className="saved-flight" >
                                            <div className="flight-date-box">
                                                <strong> Date:</strong> {flight.date} <br />
                                            </div>
                                            <strong> Departure Airport Code:</strong> {flight.departureAirportCode}<br />
                                            <strong>Departure Time:</strong>  {flight.departureTime}<br />

                                            {flight.connections && flight.connections.length > 0 && (
                                                <div className="saved-connections-data">

                                                    {flight.connections.map((connection, connectionIndex) => (
                                                        <div key={connectionIndex} className="saved-connection">
                                                            <strong> Connecting Airport Code:</strong> {connection.connectingAirportCode}
                                                            <br />
                                                            <strong>Connecting Flight Time:</strong>  {connection.connectingFlightTime}
                                                        </div>
                                                    ))}

                                                </div>
                                            )}
                                            <strong> Arrival Airport Code:</strong>  {flight.arrivalAirportCode}<br />
                                            <strong> Arrival Time: </strong> {flight.arrivalTime}<br />
                                            <strong> Seat Number: </strong> {flight.seatNumber}<br />
                                            <hr style={{ margin: "20px 0" }} />
                                        </div>


                                    ))}


                                </div>
                            ) : (
                                <p>No flights saved yet.</p>
                            )}
                        </div>
                    </div>
                    <div className="reminder-box">
                        <h1>Reminder List</h1>
                        <div className="reminder-list-container">
                            {reminderList && reminderList.length > 0 ? (


                                reminderList.map((reminderElement, elementIndex) => (
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
        </>
    )

}

export default SavedTrips;








{/* <div className="reminder-box">
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
                    </div> */}

{/* <div className="reminder-box">
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
                    </div> */}