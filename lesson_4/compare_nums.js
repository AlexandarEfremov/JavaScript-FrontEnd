function solve(arr) {
    let newArr = [];
    let arrLength = arr.length / 2

    for (let i = 0; i < arrLength; i++) {
        arr.sort((a, b) => a - b);
        newArr.push(arr.shift());
        newArr.push(arr.pop());
    }
    return newArr;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
