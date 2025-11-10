import { useState } from 'react';

function ActivityTimes() {
    const [activityTime, setActivityTime] = useState('Click to Edit Activity Time');
    const [isEditingActivityTime, setIsEditingActivityTime] = useState(false);
    return (
         <>
                <div className='activites-times'>
                    <div>
                        {isEditingActivityTime ? (
                            <div>
                                <input
                                    type="text"
                                    value={activityTime}
                                    onChange={(e) => setActivityTime(e.target.value)}
                                    className='activities-time'
                                />
                                <button onClick={(e) => setIsEditingActivityTime(false)}>Save</button>
                            </div>
                        ) : (
                            <div onClick={() => setIsEditingActivityTime(true)}>
                                <span className='activities-time-text'>{activityTime}</span>
                            </div>
                        )}
                    </div>
                    </div>
                </>
    )
}

export default ActivityTimes;