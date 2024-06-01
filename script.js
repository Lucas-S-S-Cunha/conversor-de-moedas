const convertButton = document.querySelector(".convert-button") 
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValue = document.querySelector(".currency-value")

    console.log(currencySelect.value)
    const dolarToday = 5.25
    const euroToday = 6.2

    const convertedValue = inputCurrencyValue / dolarToday

  if (currencySelect.value == "dolar"){
    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency:"USD"
    }).format(inputCurrencyValue.value / dolarToday) 
  }
    
  if (currencySelect.value == "euro"){
 currencyValue.innerHTML = new Intl.NumberFormat ("de-DE", {
    style: "currency",
    currency: "EUR"
 }).format(inputCurrencyValue.value / euroToday)
  }
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency:"BRL"
    }).format(inputCurrencyValue) 

    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency:"USD"
    }).format(convertedValue) 
     
    console.log(convertedValue)
}

convertButton.addEventListener("click", convertValues )

