/* Create an application using HTML and JavaScript that allows the user to enter a currency and render the matching exchange rate against GBP​

*Optional* Add CSS to make the application more appealing and accessible for the user*/
// const currency = document.getElementById('currencyInput').value.trim().toUpperCase();

//promise that is for waiting for users currencyinput
function currencyInput() {
    // let currency = 
    return new Promise((resolve, reject) => {
    const currency = document.getElementById('currencyInput').value.trim().toUpperCase();

      setTimeout(() => {
        if (currency === "") {
            reject("Please enter a currency");
          } else {
        // console.log(`User entered currency input of ${currency}`);
        resolve(currency);
          }
      }, 1000);
    });
  }

// Async function to retrieve exchange rates​
const retrieveExchangeRates = async (currency) => {
    const exchangeRatesURL = `https://open.er-api.com/v6/latest/${currency}`;
    
    try {
        const response = await fetch(exchangeRatesURL);
        const data = await response.json();

        if (data.result === "error") {
            throw new Error(`Error:${data["error-type"]}`);
        } else {
            const gbpRate = data.rates["GBP"];
            echoBlock.textContent = `1 ${currency} = ${gbpRate} GBP`;
        }
    // console.log('Rates against GBP are: ', JSON.stringify(data, null, 2));
    } catch (err) {
        echoBlock.textContent = `Error fetching exchange rates: ${err.message}. Please enter a valid format e.g. USD`;
    }
};

//All DOM elements
const btn = document.querySelector('button');
const input = document.querySelector('input');
const echoBlock = document.getElementById('echo');

const echoOutput = (event) => {
    
    if (input.value === '') {
        alert('Please enter a currency');
    }
    else {
        echoBlock.textContent = input.value;
    }
}

// btn.addEventListener('click', echoOutput);

btn.addEventListener('click', async () => {
try {
    // Get user input 
    const currency = await currencyInput();
    // Fetch and display the exchange rate for the currency
    await retrieveExchangeRates(currency);
} catch (err) {
    // Handle error
    alert(err);
}
});
// Trigger the function to retrieve exchange rates- not needed ​

// retrieveExchangeRates();

