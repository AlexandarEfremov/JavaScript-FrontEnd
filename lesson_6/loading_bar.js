function solve(number) {
    let loadBar = ['[', '%', '%', '%', '%', '%', '%', '%', '%', '%', '%', ']'];

    if (number == 100) {
        return `100% Complete!\n${loadBar.join('')}`;
    } else {
        let difference = (100 - number) / 10;
        loadBar.splice(-(difference + 1), difference, '.'.repeat(difference));
        return `${number}% ${loadBar.join('')}\nStill loading...`
    }
}

console.log(solve(100))