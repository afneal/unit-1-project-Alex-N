import { useState } from 'react';

function Activities() {
    const [isEditingActivities, setIsEditingActivities] = useState(false);
    const [activities, setActivities] = useState('Click to Add Activities');

    return (
        <>
            <div className='activities'>
                <div>
                    {isEditingActivities ? (
                        <div>
                            <input
                                type="text"
                                value={activities}
                                onChange={(e) => setActivities(e.target.value)}
                                className='activities-input'
                            />
                            <button onClick={(e) => setIsEditingActivities(false)}>Save</button>
                        </div>
                    ) : (
                        <div onClick={() => setIsEditingActivities(true)}>
                            <span className='activites-text'>{activities}</span>


                        </div>
                    )}
                </div>
            </div >
        </>
    )
}

export default Activities;