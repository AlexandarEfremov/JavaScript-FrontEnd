function solve(num1, num2) {
    function factorial(num) {
        if (num > 1) {
            return num * factorial(num - 1);
        } else {
            return 1;
        };
    };

    let numOneFactorial = factorial(num1);
    let numTwoFactorial = factorial(num2);

    let result = (numOneFactorial / numTwoFactorial).toFixed(2);

    return result
}

console.log(solve(5, 2));