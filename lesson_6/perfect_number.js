function solve(originalNum) {

    let messageOne = "We have a perfect number!";
    let messageTwo = "It's not so perfect.";

    let allNums = [];

    if (originalNum % 2 == 0) {
        for (let num = 0; num < originalNum; num++) {
            if (originalNum % num == 0) {
                allNums.push(num);
            }
        }
    } else {
        return messageTwo
    }

    let sumEl = allNums.reduce((a, b) => a + b);

    if (sumEl == originalNum) {
        return messageOne;
    } else {
        return messageTwo;
    }
}

console.log(solve(27.9))