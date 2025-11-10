import { useState } from 'react';

function PackingList() {
    const [list, setList] = useState([]);
    const [inputValue, setInputValue] = useState("");
    

const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = [...list];
    newItem.push(inputValue);
    setList(newItem);
    setInputValue("");
}



const handleDeleteItem = (itemIndex) => {
     const newList = [...list];
     newList.splice(itemIndex, 1); //splice away the item from the list at item index, 1 item
     setList(newList);

}


const handleActivityDelete = (dayIndex, activityIndex) => { //pass in indexes as parameters to find the correct activity per day to delete
        const newDays = [...days];  //makes copy of days array
        newDays[dayIndex].activities.splice(activityIndex, 1); //splices the activity from the specific day index,deletes 1 element
        setDays(newDays);  //updates the state
    }

    return (
        <>
            <div id='packing-list'>
                <h1>Packing List</h1>
                <ul>
                    {list.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}<button className='delete-item-button'
                                type="button"
                                onClick={() => handleDeleteItem(itemIndex)}>Delete Item</button></li>
                    ))}
                    <li>
                        <input
                            id="list-item"
                            name="list-item"
                            placeholder="Add an Item"
                            value={inputValue}
                            onChange={e => {
                                setInputValue(e.target.value)
                            }}
                        />
                    </li>
                </ul>
            </div>
            <button id="list-submit-button" onClick={handleSubmit}>Add</button>
        </>
    )
}

export default PackingList;