import { useState } from 'react'
import List from "../PlannerComponents/List";
import SubmitButton from "../PlannerComponents/SubmitButton";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function PackingList({ packingList, setPackingList, packingListData, setPackingListData }) {
    const [list, setList] = useState([]); //set emtpy array


    const handleSubmit = (event) => {
        event.preventDefault();
        setPackingList ([...packingList, list]);
        // setPackingList([...packingList, ...list]);//create new array (setPackingList) and add old packingList with new list items
        // setPackingListData([...packingListData, list])//
        setList([]);
        toast.success("Packing List Successfully Saved!");

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



