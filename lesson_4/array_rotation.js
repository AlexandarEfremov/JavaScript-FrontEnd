function solve(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        let shifted_number = arr.shift();
        arr.push(shifted_number);
    }
    console.log(arr.join(' '))
}

solve([2, 4, 15, 31], 5)