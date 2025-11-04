import React from 'react'
import { Link } from 'react-router'
import { useState } from 'react'


function Planner() {

    const [isEditing, setIsEditing] = useState(false);
    const [destinationText, setDestinationText] = useState('Destination');

    const handleOnChange = (event) => {
        setDestinationText(event.target.value);
    }

    const handleSave = () => {
        setIsEditing(false);
    }

    const handleEdit = () => {
        setIsEditing(true);
    }


    return (
        <div className='destination-div'>
            <div className='destination-save-container'>
            {isEditing ? (
                <div className='buttons'>
                    <input
                        type="text"
                        value={destinationText}
                        onChange={handleOnChange}
                        className='destination-input'
                        autoFocus
                    />
                    
                    <button onClick={handleSave} className='save-button'>Save</button>
                </div>
            ) : (
                <div className='buttons'>
                    <span className='destination-text'>{destinationText}</span>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )
            }
        </div>
        </div>
    )
}


export default Planner;
