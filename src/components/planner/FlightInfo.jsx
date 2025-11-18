import { useState } from 'react';
import SubmitButton from '../PlannerComponents/SubmitButton';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FlightInfo({ flightData, setFlightData}) {

    const [flights, setFlights] = useState([ //array of objects to map through flights
        {
            date: "",
            departureAirportCode: "",
            departureTime: "",
            arrivalAirportCode: "",
            arrivalTime: "",
            seatNumber: "",
            connections: []
        }]
    );


    const [connFlight, setConnFlight] = useState([]); //initialize to empty array so that length is 0, 
    // must be array in case there are multiple connecting flights and need to map (array of objects)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(flightData)
        const flightsWithConnections = flights.map(flight => ({
            ...flight, connections: connFlight
        }))
       
        setFlightData([...flightData, ...flightsWithConnections]);
        setFlights([{
            date: "",
            departureAirportCode: "",
            departureTime: "",
            arrivalAirportCode: "",
            arrivalTime: "",
            seatNumber: ""
        }])
        setConnFlight([])
        toast.success("Flight Details Successfully Saved!");
    }



    const handleAddFlight = () => {
        setFlights([...flights, {
            date: "",
            departureAirportCode: "",
            departureTime: "",
            arrivalAirportCode: "",
            arrivalTime: "",
            seatNumber: ""
        }])
    }

    const handleFlightDelete = (flightIndex) => { //at specific index parameter, copy array, then splice out that index value. Set state to new array
        const delFlight = [...flights];
        delFlight.splice(flightIndex, 1);
        setFlights(delFlight);
    }

    const handleAddConnection = () => { //adds empty elements to array so length > 0
        setConnFlight([...connFlight, { connectingAirportCode: "", connectingFlightTime: "" }]);
    }


    const handleConnectionDelete = (connectionIndex) => { //at specific index parameter, copy array, then splice out that index value. Set state to new array
        const delConnection = [...connFlight];
        delConnection.splice(connectionIndex, 1);
        setConnFlight(delConnection);
    }



    return (
        <>
            <div>
                <h1 className='flight-details'>Flight Details</h1>
                <form className='flight-form' onSubmit={handleSubmit}>
                    {flights.map((flightElement, flightIndex) => (

                        <fieldset key={flightIndex}>
                            <legend>Flight Information</legend>
                            <label>Date of Flight:</label>
                            <input
                                id="date"
                                name="date"
                                placeholder="Date of Flight"
                                value={flightElement.date} //access date from flight object
                                onChange={e => {
                                    const newFlight = [...flights];
                                    newFlight[flightIndex] = { ...newFlight[flightIndex], date: e.target.value }
                                    setFlights(newFlight);
                                }}
                            />

                            <label>Departure Airport Code:</label>
                            <input
                                id="deptCode"
                                name="deptCode"
                                placeholder="Departure Airport Code"
                                value={flightElement.departureAirportCode}
                                onChange={e => {
                                    const newFlight = [...flights];
                                    newFlight[flightIndex] = { ...newFlight[flightIndex], departureAirportCode: e.target.value }
                                    setFlights(newFlight);
                                }}
                            />

                            <label>Departure Time:</label>
                            <input
                                id="deptTime"
                                name="deptTime"
                                placeholder='Departure Time'
                                value={flightElement.departureTime}
                                onChange={e => {
                                    const newFlight = [...flights];
                                    newFlight[flightIndex] = { ...newFlight[flightIndex], departureTime: e.target.value }
                                    setFlights(newFlight);
                                }}
                            />

                            {connFlight.length > 0 && ( //if connecting flights button adds empty element, then run this code
                                <div>
                                    {connFlight.map((connection, connectionIndex) => ( //maps through connecting flight inputs and updates text on change
                                        <div key={connectionIndex}>
                                            <label>Connecting Airport Code:</label>
                                            <input
                                                id="connCode"
                                                name="connCode"
                                                placeholder='Connecting Airport Code'
                                                value={connection.connectingAirportCode} //accessing airportcode element at each connection object in array
                                                onChange={e => {
                                                    const newConnection = [...connFlight]; //store copy of connection array in variable
                                                    newConnection[connectionIndex] = { ...newConnection[connectionIndex], connectingAirportCode: e.target.value }
                                                    //...newConnection[index] to copy OBJECT in array and update airportCode to target value, then set that value in the old empty array
                                                    setConnFlight(newConnection);
                                                }}
                                            />

                                            <label>Connecting Flight Departure Time:</label>
                                            <input
                                                id="connTime"
                                                name='connTime'
                                                placeholder='Connecting Flight Departure Time'
                                                value={connection.connectingFlightTime}
                                                onChange={e => {
                                                    const newConnection = [...connFlight];
                                                    newConnection[connectionIndex] = { ...newConnection[connectionIndex], connectingFlightTime: e.target.value }
                                                    setConnFlight(newConnection);
                                                }}
                                            />
                                            <button
                                                className='delete-connection-button'
                                                type="button" //Arguements: Delete the specific connection at the specific index
                                                onClick={() => handleConnectionDelete(connection, connectionIndex)}>Delete Connection</button>
                                        </div>

                                    ))}


                                </div>
                            )}


                            <label>Arrival Airport Code:</label>
                            <input
                                id="arrCode"
                                name="arrCode"
                                placeholder='Arrival Airport Code'
                                value={flightElement.arrivalAirportCode}
                                onChange={e => {
                                    const newFlight = [...flights];
                                    newFlight[flightIndex] = { ...newFlight[flightIndex], arrivalAirportCode: e.target.value }
                                    setFlights(newFlight);
                                }}
                            />

                            <label>Arrival Time:</label>
                            <input
                                id="arrTime"
                                name="arrTime"
                                placeholder='Arrival Time'
                                value={flightElement.arrivalTime}
                                onChange={e => {
                                    const newFlight = [...flights];
                                    newFlight[flightIndex] = { ...newFlight[flightIndex], arrivalTime: e.target.value }
                                    setFlights(newFlight);
                                }}
                            />


                            <button type="button" onClick={handleAddConnection} className='add-connecting-button'>Add Connecting Flight</button>

                            <button
                                className='delete-flight-button'
                                type="button" //Arguements: Delete the specific flight at the specific index
                                onClick={() => handleFlightDelete(flightElement, flightIndex)}>Delete Flight</button>
                        </fieldset>
                    ))}
                    <SubmitButton onClick={handleSubmit} label="Save Flight Details" className='flight-submit-button' />

                    <button type="button" onClick={handleAddFlight} className='add-flight-button'>Add New Flight</button>
                </form>

            </div>

        </>
    )
}

export default FlightInfo;

