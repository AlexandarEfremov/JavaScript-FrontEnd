function solve(arr, step) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += step) {
        let slicedNum = arr.slice(i, i + 1);
        newArr.push(...slicedNum)
    }
    return newArr;
}

console.log(solve(['5', '20', '31', '4', '20'], 2));
solve(['dsa', 'asd', 'test', 'tset'], 2)
solve(['1', '2', '3', '4', '5'], 6)