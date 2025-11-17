import FlightInfo from "../planner/FlightInfo"
import PlannerForm from "../planner/PlannerForm"
import PackingList from "../planner/PackingList";
import ReminderList from "../planner/Reminders";

function BuildTrips({trips, setTrips, flightData, setFlightData, connFlightData, setConnFlightData, packingList, setPackingList, packingListData, setPackingListData, reminderList, setReminderList,
    reminderListData, setReminderListData}) {
    return (
        <>
            <PlannerForm trips={trips} setTrips={setTrips}/>
            <FlightInfo flightData={flightData} setFlightData={setFlightData} connFlightData={connFlightData} setConnFlightData={setConnFlightData}/>
            <PackingList packingList={packingList} setPackingList={setPackingList} packingListData={packingListData} setPackingListData={setPackingListData}/>
            <ReminderList reminderList={reminderList} setReminderList={setReminderList} reminderListData={reminderListData} setReminderListData ={setReminderListData} />
        </>

    )
}

export default BuildTrips;