import { useState } from 'react';


function Destination() {
    const [isEditingDestination, setIsEditingDestination] = useState(false);
    const [destinationText, setDestinationText] = useState('Click to Edit Trip Title');

    return (
        <>
            <div className='destination-div'>
                <div >
                    {isEditingDestination ? (
                        <div>
                            <input
                                type="text"
                                value={destinationText}
                                onChange={(e) => setDestinationText(e.target.value)}
                                className='destination-input'

                            />
                            <button onClick={(e) => setIsEditingDestination(false)}>
                                Save
                            </button>
                        </div>
                    ) : (
                        <span className='destination-text' onClick={(e) => setIsEditingDestination(true)} >{destinationText}</span>
                    )}
                </div>
            </div>
        </>
    )
}
    
export default Destination;
