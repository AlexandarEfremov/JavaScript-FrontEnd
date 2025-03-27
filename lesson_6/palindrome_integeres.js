function solve(arr) {
    let newArr = [];

    for (let num of arr) {
        let strValue = num.toString();
        let firstLetter = strValue.slice(0, 1);
        let lastLetter = strValue.slice(-1);

        newArr.push(firstLetter == lastLetter);
    }
    return newArr.join('\n');
}

console.log(solve([32, 2, 232, 1010]))