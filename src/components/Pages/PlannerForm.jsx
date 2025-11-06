import { useState } from 'react'

function PlannerForm() {
    const [formData, setFormData] = useState({
        city: "",
        date: "",
    })
    const handleInput = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const [activities, setActivities] = useState([{
        activity: "",
        time: "",
        notes: "",
    }])

    const addActivity = (e, i) => {
        const { name, value } = e.target; 
        let newActivity = [...activities];
        newActivity[i][name] = value;
        setActivities(newActivity);
    }

    const handleAddActivity = () => {
        setActivities([...activities, {
            activity: "",
            time: "",
            notes: "",
        }])
    }

    const [days, setDays] = useState([{
        city: "",
        date: "",
        activities: [
            { activity: "", time: "", notes: "" }
        ]

    }])

    const handleAddDay = () => {
        setDays([...days, {
            city: "",
            date: "",
            activities: [
                { activity: "", time: "", notes: "" }
            ]
        }])
    }

    const handleDelete = (i) => {
        let deleteActivty = [...activities];
        deleteActivty.splice(i, 1);
        setActivities(deleteActivty);
    }


    return (
        <>
            <h1 className='trip-details'>Trip Details</h1>
            <form className='form'>
                {days.map((day, dayIndex) => (
                <fieldset key={dayIndex}>
                    <legend>Day and Location</legend>
                    
                    <label>What is the city?</label>
                    <input
                        id="city"
                        name="city"
                        placeholder='City Name'
                        onChange={e => {
                            const newDays = [...days];
                            newDays[dayIndex].city = e.target.value;
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

                    {day.activities.map((act, index) => (
                        <div key={index} className='activity-component'>
                            <div className='activity-input'>
                                <label>Input Activity</label>

                                <input
                                    id="activity"
                                    name="activity"
                                    placeholder='Activity'
                                    onChange={e => {
                                        const newActivities = [...activities];
                                        newActivities[index].activity = e.target.value;
                                        setActivities(newActivities)
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
                                        const newActivities = [...activities];
                                        newActivities[index].time = e.target.value;
                                        setActivities(newActivities);
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
                                        const newActivities = [...activities];
                                        newActivities[index].notes = e.target.value;
                                        setActivities(newActivities);
                                    }}
                                />
                            </div>
                            
                            <button
                                className='delete-button'
                                type="button"
                                onClick={() => handleDelete(index)}>Delete</button>

                        </div>
                    ))}
                    <div>

                        <button className='activity-button'
                            type="button"
                            onClick={handleAddActivity}>Add Activity</button>

                        

                    </div>
                   
                </fieldset>
                ))}
                <button className='add-day-button'
                    type="button"
                    onClick={handleAddDay}>Add Day</button>
                

            </form>

        </>
    )
}


export default PlannerForm;
