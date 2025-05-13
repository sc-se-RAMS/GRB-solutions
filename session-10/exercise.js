const exchangeRatesURL = `https://open.er-api.com/v6/latest/GBP`;



// Async function to retrieve exchange rates​

const retrieveExchangeRates = async () => {

   const response = await fetch(exchangeRatesURL);

   const data = await response.json();

  

   console.log('Rates against GBP are: ', JSON.stringify(data, null, 2));

};



// Trigger the function to retrieve exchange rates​

retrieveExchangeRates();

