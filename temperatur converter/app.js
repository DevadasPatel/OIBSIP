let fromSelectE1 = document.getElementById("fromTemperature");

let toSelectE1 = document.getElementById("toTemperature");
let form = document.getElementById("myForm")
let inputEl = document.getElementById("inputElement");

let resultTemperature = document.getElementById("reusltTemp");
let ErrorMsg = document.getElementById("ErrorMsg");

let convertBTn = document.getElementById("cnvrtBtn");

let resetBtn = document.getElementById("ResetBtn");
let temp = {
    fromTemp: "",
    toTemp: ""
}

fromSelectE1.addEventListener("change", function(event) {
    temp.fromTemp = event.target.value;
});

toSelectE1.addEventListener("change", function(event) {
    temp.toTemp = event.target.value;
});



resetBtn.addEventListener("click", function(event) {
    inputEl.value = "";
    resultTemperature.value = ""
    ErrorMsg.textContent = "";


});

function convertButton() {

    let fromTemp = fromSelectE1.value;
    let toTemp = toSelectE1.value
    if (inputEl.value === "") {
        ErrorMsg.textContent = "Enter the Temperature*";
    } else if (!isNaN(inputEl.value)) {
        ErrorMsg.textContent = "";

        if (fromTemp === "celsius") {
            if (toTemp === "celsius") {
                resultTemperature.value = parseFloat(inputEl.value);

            } else if (toTemp === "Fahrenheit") {
                let fahreinheitValue = (9 / 5) * parseFloat(inputEl.value) + 32
                resultTemperature.value = fahreinheitValue;

            } else if (toTemp === "Kelvin") {
                let kelvinValue = parseFloat(inputEl.value) + 273.15
                resultTemperature.value = kelvinValue;
            }

        } else if (fromTemp === "fahrenheit") {
            if (toTemp === "Fahrenheit") {
                resultTemperature.value = parseFloat(inputEl.value);

            } else if (toTemp === "celsius") {
                let celsiusValue = 5 / 9 * (parseFloat(inputEl.value) - 32)
                resultTemperature.value = celsiusValue;

            } else if (toTemp === "Kelvin ") {
                let celsiusValue = 5 / 9 * (parseFloat(inputEl.value) - 32)
                let kelvinValue = celsiusValue + 273.15
                resultTemperature.value = kelvinValue;
            }

        } else {
            if (toTemp === "Kelvin") {
                resultTemperature.value = parseFloat(inputEl.value);

            } else if (toTemp === "celsius") {
                let celsiusValue = parseFloat(inputEl.value) - 273.15
                resultTemperature.value = celsiusValue;

            } else if (toTemp === "Fahrenheit") {
                let celsiusValue = 5 / 9 * (parseFloat(inputEl.value) - 32)
                let fahrenheitValue = celsiusValue - 273.15
                resultTemperature.value = fahrenheitValue;
            }

        }
    } else {
        ErrorMsg.textContent = "***Enter the numbers not alphabets****"

    }
}

inputEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        ErrorMsg.textContent = "****Plz Enter the Temperature****";

    } else {
        ErrorMsg.textContent = "";

    }
})

form.addEventListener("submit", function(event) {
    event.preventDefault();
})