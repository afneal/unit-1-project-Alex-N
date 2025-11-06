import { useState } from 'react'

function PlannerForm() {

    const [days, setDays] = useState([{ //initialize days array with useState hook to empty strings in the days objects
        city: "",
        date: "",
        activities: [
            { activity: "", time: "", notes: "" }
        ]

    }])



    const handleAddActivity = (dayIndex) => {
        const newDays = [...days];  //make a copy of the "days" array without mutating original
        newDays[dayIndex].activities.push({  //adds a blank activity object to the specific day index
            activity: "",
            time: "",
            notes: "",
        });
        setDays(newDays);  //update reacts state to let it know that data was updated to re-render that portion
    }




    const handleAddDay = () => {
        setDays([...days, {  //updates state with new empty day to the array. Spread operator makes days into a new array, adds empty object to the array
            city: "",
            date: "",
            activities: [
                { activity: "", time: "", notes: "" }
            ]
        }])
    }


    const handleActivityDelete = (dayIndex, activityIndex) => {
        const newDays = [...days];  //makes copy of days array
        newDays[dayIndex].activities.splice(activityIndex, 1); //splices the activity from the specific day index,deletes 1 element
        setDays(newDays);  //updates the state
    }


    const handleDayDelete = (dayIndex) => {
        const newDays = [...days];
        newDays.splice(dayIndex, 1); //delete the whole day array at the index (not just the day object)
        setDays(newDays);
    }


    return (
        <>
            <h1 className='trip-details'>Trip Details</h1>
            <form className='form'> 
                {days.map((day, dayIndex) => ( //map in react needs a unique key to match elements when updating the virtual DOM. 
                                                //map through the days array to make a new form fieldset for each new day
                    <fieldset key={dayIndex}>
                        <legend>Day and Location</legend>

                        <label>What is the city?</label>
                        <input
                            id="city"
                            name="city"
                            placeholder='City Name'
                            onChange={e => { //updates when user types in input field
                                const newDays = [...days]; //create array copy without mutating original
                                newDays[dayIndex].city = e.target.value; //sets the city input at the specific day index to the value the user is typing
                                setDays(newDays);
                            }}

                        />
                        <label>What is the date of activities?</label>
                        <input
                            id="date"
                            name="date"
                            type='date'
                            placeholder='Date of Activities'
                            onChange={e => {
                                const newDays = [...days];
                                newDays[dayIndex].date = e.target.value;
                                setDays(newDays);
                            }}
                        />



                        <legend>Activities</legend>

                        {day.activities.map((activity, activityIndex) => (
                            <div key={activityIndex} className='activity-component'>
                                <div className='activity-input'>
                                    <label>Input Activity</label>

                                    <input
                                        id="activity"
                                        name="activity"
                                        placeholder='Activity'
                                        onChange={e => {
                                            const newDays = [...days];
                                            newDays[dayIndex].activities[activityIndex].activity = e.target.value;
                                            setDays(newDays);
                                        }}
                                    />

                                </div>
                                <div className='time-input'>
                                    <label>Time of Activity</label>
                                    <input
                                        id="time"
                                        name="time"
                                        placeholder='Time of Activity'
                                        onChange={e => {
                                            const newDays = [...days];
                                            newDays[dayIndex].activities[activityIndex].time = e.target.value;
                                            setDays(newDays);
                                        }}
                                    />
                                </div>
                                <div className='activity-notes'>
                                    <label>Notes</label>
                                    <textarea
                                        id="notes"
                                        name="notes"
                                        rows={5}
                                        placeholder='Add Notes'
                                        onChange={e => {
                                            const newDays = [...days];
                                            newDays[dayIndex].activities[activityIndex].notes = e.target.value;
                                            setDays(newDays);
                                        }}
                                    />
                                </div>

                                <button
                                    className='delete-activity-button'
                                    type="button" //Parameters: Delete the specific activity index at the specific day index
                                    onClick={() => handleActivityDelete(dayIndex, activityIndex)}>Delete Activity</button>
                                    

                            </div>
                        ))}
                        <div>

                            <button className='activity-button'
                                type="button" //Add activity at the specific dayIndex listed as a parameter
                                onClick={() => handleAddActivity(dayIndex)}>Add Activity</button>

                        </div>

                        <div>
                            <button className='delete-day-button'
                                type="button"
                                onClick={() => handleDayDelete(dayIndex)}>Delete Day</button>
                        </div>

                    </fieldset>
                ))}
                <button className='add-day-button'
                    type="button" //No parameters so no need for arrow function to call function
                    onClick={handleAddDay}>Add Day</button>


            </form>

        </>
    )
}


export default PlannerForm;
