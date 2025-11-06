import { useState } from 'react';

function Activities() {
    const [isEditingActivities, setIsEditingActivities] = useState(false);
    const [activities, setActivities] = useState(['Click to Add Activities']); //activites must be array to use map later

    const handleAddActivity = (index, value) => {  //set index and value parameters
        const updatedActivities = [...activities];  //make a copy of all activities
        updatedActivities[index] = value;       //updates the activity at the index to the new value activity
        setActivities(updatedActivities); //update state with added activities
    }

    const addActivity = () => {
        setActivities([...activities, '']); //button creates a new array of activities with an empty string at the end
    }

    return (
        <>
            <div className='activities'>
                <div>
                    {isEditingActivities ? (
                        <div>
                            {activities.map((activity, index) => (  //loop through activities at each index

                                <div key={index} className='activity-item'>
                                    <input
                                        type="text"
                                        value={activity}
                                        onChange={(e) => handleAddActivity(index, e.target.value)} //update the index with new value
                                    />
                                </div>
                            ))}

                            <button onClick={(e) => setIsEditingActivities(false)}>Save</button>
                        </div>

                    ) : (

                        <div>


                            <span className='activites-text'>{activities}</span>


                        </div>
                    )}
                    <div>
                        <button className='edit-button'
                            type="button"
                            onClick={() => setIsEditingActivities(true)}>Edit</button>

                        <button className='add-button'
                            type="button"
                            onClick={ addActivity }>Add Activity</button>
                    </div>

                </div>
            </div >
        </>
    )
}

export default Activities;

