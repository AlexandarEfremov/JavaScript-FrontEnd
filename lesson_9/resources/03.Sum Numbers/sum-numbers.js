function calc() {
    let itemOne = document.getElementById("num1");
    let itemTwo = document.getElementById("num2");
    let output = document.getElementById("sum");

    output.value = parseInt(itemOne.value) + parseInt(itemTwo.value);
}