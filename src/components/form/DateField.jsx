import { useState } from 'react';

function DateField() {
    const [isEditingDate, setIsEditingDate] = useState(false);
    const [dates, setDates] = useState('Click to Edit Date');

    return (
        <>
            <div className='date'>
                <div>
                    {isEditingDate ? (
                        <div>
                            <input
                                type="text"
                                value={dates}
                                onChange={(e) => setDates(e.target.value)}
                                className='date-input'

                            />
                            <button onClick={(e) => setIsEditingDate(false)}>
                                Save
                            </button>
                        </div>
                    ) : (
                        <span className='date-text' onClick={(e) => setIsEditingDate(true)}> {dates} </span>
                    )}
                </div>
            </div>
        </>
    )
}

export default DateField;











