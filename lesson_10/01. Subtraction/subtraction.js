function subtract() {
    let numOne = document.getElementById("firstNumber");
    let numTwo = document.getElementById("secondNumber");

    numOne = Number(numOne.value);
    numTwo = Number(numTwo.value);

    let subtract = numOne - numTwo;
    let output = document.getElementById("result");


    output.textContent += subtract;
}