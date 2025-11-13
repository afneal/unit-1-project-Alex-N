
import List from "../PlannerComponents/List";


function PackingList({packingList, setPackingList}) {

    const savePackingList = (event) => {
        event.preventDefault();
        setPackingList([...packingList, list])
        alert("Packing List Successfully Saved!");
        setPackingList("");
    }



    return (

    
<div>
    <h1>Packing List</h1>
    <List />

    <button type="button" onClick={savePackingList}>Save Packing List</button>
</div >
)
}

export default PackingList;

// const handleSubmit = (event) => {
//         event.preventDefault();
        
//         setTrips([...trips, days]) //make copy of empty trips array, add days to the copy
       
//         alert('Trip Successfully Saved!')
//         setDays([{
//             city: "",
//             date: "",
//             activities: [
//                 { activity: "", time: "", notes: "" }
//             ]


//         }])
        
        
//     }

