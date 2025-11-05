import React from 'react'
import { Link } from 'react-router'
import { useState } from 'react'


function Planner() {

    const [isEditing, setIsEditing] = useState(false);
    const [destinationText, setDestinationText] = useState('Click to Edit Trip Title');
    const [date, setDate] = useState('Click to Set Date');



    const handleSave = () => {
        setIsEditing(false);
    }

    const handleEdit = () => {
        setIsEditing(true);
    }


    return (
        <>
            <div className='destination-div'>
                <div >
                    {isEditing ? (
                        <div>
                            <input
                                type="text"
                                value={destinationText}
                                onChange={(e) => setDestinationText(e.target.value)}
                                className='destination-input'
                                autoFocus
                            />
                            <button onClick={handleSave}>
                                Save
                            </button>
                        </div>
                    ) : (
                        <span className='destination-text' onClick={handleEdit} >{destinationText}</span>
                    )}
                </div>
            </div>

            <div className='date'>
                <div>
                    {isEditing ? (
                        <div>
                            <input
                                type="text"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className='date-input'
                                autoFocus
                            />
                            <button onClick={handleSave}>
                                Save
                            </button>
                        </div>
                    ) : (
                        <span className='date-text' onClick={handleEdit}> {date} </span>
                    )}
                </div>
            </div>
        </>
    )
}


export default Planner;


