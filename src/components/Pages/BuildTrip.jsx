import FlightInfo from "../planner/FlightInfo"
import PlannerForm from "../planner/PlannerForm"
import PackingList from "../planner/PackingList";

function BuildTrips({trips, setTrips, packingList, setPackingList }) {
    return (
        <>
            <PlannerForm trips={trips} setTrips={setTrips}/>
            <FlightInfo />
            <PackingList packingList={packingList} setPackingList={setPackingList}/>
        </>

    )
}

export default BuildTrips;