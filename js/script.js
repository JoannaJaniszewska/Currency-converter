
{
const calculateResult = (amount, currency) => {
        const euroCurrency = 4.42;
        const dollarCurrency = 4.04;
        const poundCurrency = 5.14;

        switch (currency ) {
            case "euro":
                return amount / euroCurrency;

            case "dollar":
                return amount / dollarCurrency;

            case "pound":
                return amount / poundCurrency;
        } 

    };

    const updateResultText = (amount, result, currency) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerText = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
    }

const onFormSubmit = (event) => {
event.preventDefault();

const amountElement = document.querySelector(".js-amount");
const currencyElement = document.querySelector(".js-currency")

const amount = +amountElement.value;
const currency = currencyElement.value;

const result = calculateResult(amount, currency);

updateResultText(amount, result, currency);
};

const init = () => {
    const formElement = document.querySelector(".js-form");
    
    formElement.addEventListener("submit", onFormSubmit);
};

init();

}
