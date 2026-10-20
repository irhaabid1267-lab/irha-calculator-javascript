
const display = document.getElementById("display");

let firstNumber = "";
let operator = "";
let isSecond = false;

document.querySelectorAll("button").forEach(function (button) {

    button.addEventListener("click", function () {

        let value = button.dataset.value;

        if (button.id === "clear") {
            display.value = "";
            firstNumber = "";
            operator = "";
            isSecond = false;
        }

        else if (button.id === "equals") {

            let a = Number(firstNumber);
            let b = Number(display.value.slice(firstNumber.length + 1));

            if (firstNumber === "" || operator === "" ||
                display.value.endsWith(operator)) {
                display.value = "Error";
            }
            else if (operator === "/" && b === 0) {
                display.value = "Error";
            }
            else {
                if (operator === "+") display.value = a + b;
                else if (operator === "-") display.value = a - b;
                else if (operator === "*") display.value = a * b;
                else if (operator === "/") display.value = a / b;
            }

            firstNumber = "";
            operator = "";
            isSecond = false;
        }

        else if (button.classList.contains("operator")) {

            if (display.value === "" || operator !== "") return;

            firstNumber = display.value;
            operator = value;
            isSecond = true;

            display.value += value;
        }

        else if (value !== undefined) {

            if (display.value === "Error") {
                display.value = "";
                firstNumber = "";
                operator = "";
                isSecond = false;
            }

            display.value += value;
        }

    });

});
