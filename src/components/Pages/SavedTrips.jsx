import PackingList from "../planner/PackingList";
import { useState } from 'react';



function SavedTrips() {
    const mockData = ([{
        city: "Tokyo",
        date: "May 5, 2025",
        activities: [
            { activity: "Visit Tokyo Tower", time: "11:00 AM", notes: "Buy tickets online" },
            { activity: "See Sumo Tournament", time: "5:00 PM", notes: "Bring cash for souvenirs" },
        ]
    },
    {
        city: "Osaka",
        date: "May 6, 2025",
        activities: [
            { activity: "Ride Ferris Wheel", time: "8:00 AM", notes: "Bring Selfie Stick" },
            { activity: "Ride Boat down Canal", time: "1:00 PM", notes: "" }
        ]
    },
    ])

    return (
        <>
            <div id="mock-trip-details">
                <div id='mock-trip-day'>

                    <div>
                        {mockData.map((dayObj, dayIndex) => (
                            <div key={dayIndex}>
                                <h2>{dayObj.city} on {dayObj.date}</h2>
                                <ul>
                                    {dayObj.activities.map((activity, activityIndex) => (
                                        <div key={activityIndex}>
                                            <>
                                                <h3>{activity.time}</h3>
                                                <ul>
                                                    <li key={activityIndex}>{activity.activity}</li>
                                                </ul>
                                                <p id="mock-notes-par">{activity.notes}</p>
                                            </>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        ))}


                    </div>
                </div>
            </div >
            <div>
                <PackingList />
            </div>
        </>




    )

}

export default SavedTrips;



