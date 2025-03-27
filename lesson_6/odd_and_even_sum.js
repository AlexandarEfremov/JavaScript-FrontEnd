function solve(num) {
    let oddSum = 0;
    let evenSum = 0;

    let numAsString = num.toString();
    for (let digit of numAsString) {
        let converted = parseInt(digit);

        if (converted % 2 == 0) {
            evenSum += converted;
        } else {
            oddSum += converted
        }
    }

    let result = `Odd sum = ${oddSum}, Even sum = ${evenSum}`
    return result;
}

console.log(solve(3495892137259234));
