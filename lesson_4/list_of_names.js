function solve(arr) {
    let newArr = arr.sort((a, b) => a.localeCompare(b));
    let counter = 1;
    let finalArr = [];
    for (let el of newArr) {
        finalArr.push(`${counter}.${el}`);
        counter += 1;
    }
    console.log(finalArr.join('\n'));
}

solve(["John", "Bob", "Christina", "Ema"])
