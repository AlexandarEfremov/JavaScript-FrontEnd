function solve(num1, num2, num3) {
    return subtract(sum(num1, num2), num3);

    function sum(add1, add2) {
        return add1 + add2;
    }

    function subtract(val1, val2) {
        return val1 - val2;
    }
}



console.log(solve(42,

    58,

    100));