import Activities from "../form/Activities";
import ActivityTimes from "../form/ActivityTimes";
import DateField from "../form/DateField";
import Destination from "../form/Destination";
import { useState } from 'react'


function Planner() {
    return (
        <div>
            <Destination />
            <DateField />
            <Activities />
            <ActivityTimes />
        </div>
    )
}

export default Planner;








































































// import React from 'react'
// import { Link } from 'react-router'
// import { useState } from 'react'



// function Planner() {
//     const [isEditingDestination, setIsEditingDestination] = useState(false);
//     const [isEditingDate, setIsEditingDate] = useState(false);
//     const [isEditingActivities, setIsEditingActivities] = useState(false);
//     const [destinationText, setDestinationText] = useState('Click to Edit Trip Title');
//     const [dates, setDates] = useState('Click to Edit Date');
//     const [activities, setActivities] = useState('Click to Add Activities');
//     const [activityTime, setActivityTime] = useState('Click to Edit Activity Time');
//     const [isEditingActivityTime, setIsEditingActivityTime] = useState(false);




//     function Destination() {
//         return (
//             <>
//                 <div className='destination-div'>
//                     <div >
//                         {isEditingDestination ? (
//                             <div>
//                                 <input
//                                     type="text"
//                                     value={destinationText}
//                                     onChange={(e) => setDestinationText(e.target.value)}
//                                     className='destination-input'

//                                 />
//                                 <button onClick={(e) => setIsEditingDestination(false)}>
//                                     Save
//                                 </button>
//                             </div>
//                         ) : (
//                             <span className='destination-text' onClick={(e) => setIsEditingDestination(true)} >{destinationText}</span>
//                         )}
//                     </div>
//                 </div>
//             </>
//         )
//     }

//     function DateField() {
//         return (
//             <>
//                 <div className='date'>
//                     <div>
//                         {isEditingDate ? (
//                             <div>
//                                 <input
//                                     type="text"
//                                     value={dates}
//                                     onChange={(e) => setDates(e.target.value)}
//                                     className='date-input'

//                                 />
//                                 <button onClick={(e) => setIsEditingDate(false)}>
//                                     Save
//                                 </button>
//                             </div>
//                         ) : (
//                             <span className='date-text' onClick={(e) => setIsEditingDate(true)}> {dates} </span>
//                         )}
//                     </div>
//                 </div>
//             </>
//         )
//     }


//     function Activities() {
//         return (
//             <>
//                 <div className='activities'>
//                     <div>
//                         {isEditingActivities ? (
//                             <div>
//                                 <input
//                                     type="text"
//                                     value={activities}
//                                     onChange={(e) => setActivities(e.target.value)}
//                                     className='activities-input'
//                                 />
//                                 <button onClick={(e) => setIsEditingActivities(false)}>Save</button>
//                             </div>
//                         ) : (
//                             <div onClick={() => setIsEditingActivities(true)}>
//                                 <span className='activites-text'>{activities}</span>


//                             </div>
//                         )}
//                     </div>
//                 </div >
//             </>

//         )

//     }

//     function ActivitiesTimes() {
//         return (
//             <>
//                 <div className='activites-times'>
//                     <div>
//                         {isEditingActivityTime ? (
//                             <div>
//                                 <input
//                                     type="text"
//                                     value={activityTime}
//                                     onChange={(e) => setActivityTime(e.target.value)}
//                                     className='activities-time'
//                                 />
//                                 <button onClick={(e) => setIsEditingActivityTime(false)}>Save</button>
//                             </div>
//                         ) : (
//                             <div onClick={() => setIsEditingActivityTime(true)}>
//                                 <span className='activities-time-text'>{activityTime}</span>
//                             </div>
//                         )}
//                     </div>
//                     </div>
//                 </>
//                 )
//     }

//                 return (
//                 <>
//                     <Destination />
//                     <DateField />
//                     <Activities />
//                     <ActivitiesTimes />
//                 </>
//                 )
// }




//                 export default Planner;


