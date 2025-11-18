import { useState } from 'react';

function ExchangeRates () {
    const [rates, setRates] = useState(null);

    fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json")
        .then((response) => response.json())
        .then((data) => setRates(data))
        .catch((error) => {error.message})

        return (
            <div className='exchange-rates-box'>
                <h1>Exchange Rates</h1>
                <p>USD: {rates.usd} </p>
                
            </div>
        )
}

export default ExchangeRates;