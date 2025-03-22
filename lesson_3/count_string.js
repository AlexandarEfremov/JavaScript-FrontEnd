function solve(text, word) {
    let splitText = text.split(' ')
    let counter = 0;
    for (let i of splitText) {
        if (i == word) {
            counter += 1;
        }
    }
    return console.log(counter);
}

solve('softuni is great place for learning new programming languages',

    'softuni');