import { useState } from 'react'
import List from "../PlannerComponents/List";
import SubmitButton from "../PlannerComponents/SubmitButton";


function PackingList({ packingList, setPackingList, packingListData, setPackingListData }) {
    const [list, setList] = useState([]); //set emtpy array


    const handleSubmit = (event) => {
        event.preventDefault();
        setPackingList([...packingList, ...list]);
        setPackingListData([...packingListData, list])
        alert("Packing List Successfully Saved!");
        setList([]);

    }



    return (
        //pass list and setList states to child
        <>
        
            <h1 className='packing-list-title'>Packing List</h1>
            <div className='packing-list-input-container'>

                <form className='packing-list-form' >
                    <List list={list} setList={setList} />

                    <SubmitButton onClick={handleSubmit} label="Save Packing List" className='packing-list-submit-button' />
                </form>
            </div >
        </>
    )
}

export default PackingList;



