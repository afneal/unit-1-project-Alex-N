import { useState } from 'react';

function FlightInfo() {

    const [flight, setFlight] = useState([{
        date: "",
        departureAirportCode: "",
        departureTime: "",
        arrivalAirportCode: "",
        arrivalTime: "",
        seatNumber: ""
    }])

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Flight Information Saved!");
        setFlight([{
            date: "",
            departureAirportCode: "",
            departureTime: "",
            arrivalAirportCode: "",
            arrivalTime: "",
            seatNumber: ""
        }])
    }

    return (
        <>
            <div>
                <h1 className='flight-details'>Flight Details</h1>
                <form className='flight-form' onSubmit={handleSubmit}>

                    <fieldset key>
                        <legend>Flight Information</legend>
                        <label>What is the date of the flight?</label>
                        <input
                            id="date"
                            name="date"
                            placeholder="Date of Flight"
                            value={flight.date}
                            onChange={e => {
                                const newFlight = [...flight];
                                newFlight.date = e.target.value;
                                setFlight(newFlight);
                            }}
                        />

                        <label>What is the Departure Airport Code?</label>
                        <input
                            id="deptCode"
                            name="deptCode"
                            placeholder="Departure Airport Code"
                            value={flight.departureAirportCode}
                            onChange={e => {
                                const newFlight = [...flight];
                                newFlight.departureAirportCode = e.target.value;
                                setFlight(newFlight);
                            }}
                            />

                    </fieldset>

                </form>

            </div>
        </>
    )
}

export default FlightInfo;

