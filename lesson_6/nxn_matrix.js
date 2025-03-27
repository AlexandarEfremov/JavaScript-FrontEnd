function solve(num) {
    let myArr = [];
    for (let i = 0; i < num; i++) {
        myArr.push(num);
    }

    let oneRow = myArr.join(' ');
    let matrix = [];

    for (let b = 0; b < num; b++) {
        matrix.push(oneRow);
    }

    return matrix.join('\n');
}

console.log(solve(7))