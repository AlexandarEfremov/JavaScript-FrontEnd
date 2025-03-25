function solve(item, quantity) {
    let result = 0;

    if (item == 'coffee') {
        result += quantity * 1.5;
    } else if (item == 'water') {
        result += quantity * 1;
    } else if (item == 'coke') {
        result += quantity * 1.4;
    } else if (item == 'snacks') {
        result += quantity * 2;
    }

    return result.toFixed(2);
}

console.log(solve("coffee", 2));
